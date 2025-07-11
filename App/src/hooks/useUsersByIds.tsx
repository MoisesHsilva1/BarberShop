import { useQuery } from "@tanstack/react-query";
import { getUsersByIdsUseCase } from "../usecases/user/getUsersByIdsUseCase";

export const useUsersByIds = (ids: string[]) => {
  return useQuery({
    queryKey: ["getUsersByIds", ids],
    queryFn: ({ queryKey }) => {
      const [_key, ids] = queryKey as [string, string[]];
      return getUsersByIdsUseCase(ids);
    },
    enabled: !!ids,
  });
};
