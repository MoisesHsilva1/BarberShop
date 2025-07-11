import { UserService } from "../../service/UserService";

export const getUsersByIdsUseCase = async (ids: string[]) => {
  return UserService.getUsersByIds(ids);
};
