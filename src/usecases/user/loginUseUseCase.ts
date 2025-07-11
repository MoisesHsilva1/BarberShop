import { UserService } from "../../service/UserService";
import { LoginUserDto } from "../../types/interface/LoginUserDto";

export const loginUserUseCase = async (loginData: LoginUserDto) => {
  return UserService.loginUser(loginData);
};
