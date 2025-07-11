import { AppointmentService } from "../../service/AppointmentService";
import { CreateAppointmentDto } from "../../types/interface/CreateAppointment.dto";

export const createAppointmentUseCase = async (
  appointment: CreateAppointmentDto
) => {
  return AppointmentService.createAppointmnet(appointment);
};
