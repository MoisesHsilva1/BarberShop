import { useState, useEffect } from "react";
import axios from "axios";

const useAppointmentsByDate = (date: string) => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.GET_APPOINTMENTBYDATE_API_URL || "";

  useEffect(() => {
    if (!date) return;

    const fetchAppointments = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(`${apiUrl}?date=${encodeURIComponent(date)}`);
        setAppointments(data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Erro ao buscar agendamentos");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [date, apiUrl]);

  return { appointments, loading, error };
}

export default useAppointmentsByDate;
