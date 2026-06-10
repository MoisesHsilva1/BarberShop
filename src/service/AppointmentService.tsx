import { api } from "./api";

export const AppointmentService = {
  getAllHours: async (date: string) => {
    const response = await api.get(
      `/appointments/available-times?date=${date}`,
    );

    return response.data;
  },
  getByDate: async (date: string) => {
    const response = await api.get(
      `/appointments/appointments-date?date=${date}`,
    );

    return response.data;
  },
};
