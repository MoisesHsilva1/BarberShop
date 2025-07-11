import { useQuery } from "@tanstack/react-query";
import { getAllHoursUsecase } from "../usecases/appointment/getAllHoursUseCase";

export const useAppointmentHours = (date: string) => {
  return useQuery({
    queryKey: ["getAllHours", date],
    queryFn: () => getAllHoursUsecase(date),
    enabled: !!date,
  });
};
