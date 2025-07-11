import { useQuery } from "@tanstack/react-query";
import { getAppointmentByDateUseCase } from "../usecases/appointment/getAppoinmentByDateUseCase";

export const useAppointmentsByDate = (date: string) => {
  return useQuery({
    queryKey: ["getByDate", date],
    queryFn: ({ queryKey }) => {
      const [_key, date] = queryKey;
      return getAppointmentByDateUseCase(date);
    },
    enabled: !!date,
  });
};
