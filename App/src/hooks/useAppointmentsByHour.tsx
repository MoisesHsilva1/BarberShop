import axios from "axios";
import { useEffect, useState } from "react";

interface AppointmentHours {
  occupiedTimes: string[];
  availableTimes: { id: string; time: string }[];
}

const useAppointmentsByHour = (date?: string) => {
  const [hours, setHours] = useState<AppointmentHours>({
    occupiedTimes: [],
    availableTimes: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.GET_APPOINTMENTBYHOUR_API_URL;

  useEffect(() => {
    if (!date || !apiUrl) {
      if (!apiUrl) console.warn("GET_APPOINTMENTBYHOUR_API_URL não está definido.");
      return;
    }

    const fetchAppointmentsHours = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(`${apiUrl}?date=${encodeURIComponent(date)}`);
        const { occupiedTimes, availableTimes } = data;

        setHours({
          occupiedTimes,
          availableTimes: availableTimes.map((time: { id: string; time: string }) => ({
            id: time.id,
            time: time.time,
          })),
        });
      } catch (err: any) {
        setError(err.response?.data?.message || "Erro ao buscar horários.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentsHours();
  }, [date, apiUrl]);

  return { hours, loading, error };
};

export default useAppointmentsByHour;
