import { useQuery } from "@tanstack/react-query";
import { getUserIsAdminUseCase } from "../usecases/user/getUserIsAdminUseCase";

export const useUserAdmin = (id: string) => {
  return useQuery({
    queryKey: ["getUsersIsAdmin", id],
    queryFn: ({ queryKey }) => {
      const [_key, id] = queryKey;
      return getUserIsAdminUseCase(id);
    },
    enabled: !!id,
  });
};
