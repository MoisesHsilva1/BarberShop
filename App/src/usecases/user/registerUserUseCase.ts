import { UserService } from "../../service/UserService";
import { RegisterUserDto } from "../../types/Dto/RegisterUserDto";

export const registerUserUseCase = async (user: RegisterUserDto) => {
  return UserService.registerUser(user);
};
