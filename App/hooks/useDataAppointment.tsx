import { useEffect } from "react";
import axios from "axios";

function useDataAppointment() {
  const apiUrl = process.env.VITE_CREATE_APPOINTMENT_API_URL || "";
  useEffect(() => {
    const saveInfoAppointment = async () => {
      const fullAppointmentData = JSON.parse(
        localStorage.getItem("fullAppointmentData") || "{}"
      );

      if (!Object.keys(fullAppointmentData).length) return;

      try {
        await axios.post(apiUrl, fullAppointmentData);
        localStorage.removeItem("fullAppointmentData");
      } catch (error) {
        console.error("Erro ao salvar os dados do agendamento", error);
      }
    };

    saveInfoAppointment();
  }, [apiUrl]);

  return null;
}

export default useDataAppointment;
