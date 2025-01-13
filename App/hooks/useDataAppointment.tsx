import axios from "axios";

const useDataAppointment = () => {
  const apiUrl = process.env.CREATE_APPOINTMENT_API_URL || "";
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

  return null;
};

export default useDataAppointment;
