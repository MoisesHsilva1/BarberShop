import { CreateAppointmentDto } from "../types/interface/CreateAppointment.dto";
import { getAuth } from "@firebase/auth";
import { api } from "./api";

export const AppointmentService = {
  createAppointmnet: async (appointment: CreateAppointmentDto) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) throw new Error("User not Auth");

    const idToken = await user.getIdToken();

    const response = await api.post("/appointments", appointment, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    return response.data;
  },
  getAllHours: async (date: string) => {
    const response = await api.get(
      `/appointments/available-times?date=${date}`
    );

    return response.data;
  },
  getByDate: async (date: string) => {
    const response = await api.get(
      `/appointments/appointments-date?date=${date}`
    );

    return response.data;
  },
};
