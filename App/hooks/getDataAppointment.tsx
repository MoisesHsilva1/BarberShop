import { useEffect, useState } from "react";
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

function getDataAppointment(selectedDate: Date) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const formattedSelectedDate = selectedDate.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short",
        }).toUpperCase(); 

        const response = await axios.get("http://localhost:3030/barberShop");

        const filteredAppointments = response.data.filter((appointment: Appointment) =>
          appointment.date.toUpperCase() === formattedSelectedDate 
        );

        setAppointments(filteredAppointments);
      } catch (err) {
        console.error("Erro ao buscar agendamentos:", err);
      }
    };

    fetchAppointments();
  }, [selectedDate]); 

  return appointments;
}

export default getDataAppointment;
