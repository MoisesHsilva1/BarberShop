import { useMutation } from "@tanstack/react-query";
import { RegisterUserDto } from "../types/Dto/RegisterUserDto";
import { registerUserUseCase } from "../usecases/user/registerUserUseCase";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (userData: RegisterUserDto) => registerUserUseCase(userData),
  });
};
