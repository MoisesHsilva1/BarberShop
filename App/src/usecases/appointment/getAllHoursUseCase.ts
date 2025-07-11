import { AppointmentService } from "../../service/AppointmentService";

export const getAllHoursUsecase = async (date: string) => {
  return AppointmentService.getAllHours(date);
};
