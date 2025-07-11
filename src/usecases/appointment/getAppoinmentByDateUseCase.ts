import { AppointmentService } from "../../service/AppointmentService";

export const getAppointmentByDateUseCase = async (date: string) => {
  return AppointmentService.getByDate(date);
};
