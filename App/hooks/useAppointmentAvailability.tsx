import { useState, useEffect } from "react";
import axios from "axios";

interface Appointment {
  _id: string;
  date: string;
  time: string;
  services: string[];
  user: {
    userName: string;
    userEmail: string;
    phoneUser: string;
  };
}

function useAppointmentAvailability(date: string, time: string) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const apiUrl =
    process.env.VITE_GET_AVAILABILITY_APPOINTMENT_API_URL || "";

  useEffect(() => {
    if (!date || !time) return;

    const fetchAppointmentAvailability = async () => {
      try {
        const encodedDate = encodeURIComponent(date);
        const encodedTime = encodeURIComponent(time);

        const { data } = await axios.get(
          `${apiUrl}?date=${encodedDate}&time=${encodedTime}`
        );

        setAppointments(data);
        setError(null);
      } catch (err: any) {
        console.error("Erro ao verificar agendamentos:", err);
        setError(err.message || "Erro ao verificar agendamentos.");
      }
    };

    fetchAppointmentAvailability();
  }, [date, time, apiUrl]);

  return { appointments, error };
}

export default useAppointmentAvailability;
