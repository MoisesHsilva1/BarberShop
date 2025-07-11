import { UserService } from "../../service/UserService";

export const getUserIsAdminUseCase = async (id: string): Promise<Boolean> => {
  return UserService.getUserIsAdmin(id);
};
