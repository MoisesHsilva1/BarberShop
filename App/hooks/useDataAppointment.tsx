import { useEffect } from "react";
import axios from "axios";

function useDataAppointment() {
  useEffect(() => {
    const saveInfoAppointment = async () => {
      const fullAppointmentData = JSON.parse(
        localStorage.getItem("fullAppointmentData") || "{}"
      );

      if (!Object.keys(fullAppointmentData).length) return;

      await axios.post("http://localhost:3030/barberShop", fullAppointmentData); 
    };

    saveInfoAppointment();
  }, []);

  return null;
}

export default useDataAppointment;
