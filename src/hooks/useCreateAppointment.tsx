import { useMutation } from "@tanstack/react-query";
import { CreateAppointmentDto } from "../types/interface/CreateAppointment.dto";
import { createAppointmentUseCase } from "../usecases/appointment/createAppointmentUseCase";

export const useCreateAppointment = () => {
  return useMutation({
    mutationFn: (appointment: CreateAppointmentDto) =>
      createAppointmentUseCase(appointment),
  });
};
