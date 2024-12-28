import { useEffect } from "react";
import axios from "axios";

function useDataAppointment() {
  useEffect(() => {
    const saveInfoAppointment = async () => {
      try {
        const fullAppointmentData = JSON.parse(localStorage.getItem("fullAppointmentData") || "{}");

        if (Object.keys(fullAppointmentData).length) {
          await axios.post("http://localhost:3030/barberShop", fullAppointmentData);
          console.log("Dados salvos com sucesso.");
          localStorage.removeItem("fullAppointmentData");
        } else {
          console.log("Nenhum dado encontrado para salvar.");
        }
      } catch (error) {
        console.error("Erro ao salvar dados no banco de dados:", error);
      }
    };

    saveInfoAppointment();
  }, []);

  return null;
}

export default useDataAppointment;
