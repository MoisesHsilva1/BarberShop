import { useMutation } from "@tanstack/react-query";
import { loginUserUseCase } from "../usecases/user/loginUseUseCase";
import { LoginUserDto } from "../types/interface/LoginUserDto";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (loginData: LoginUserDto) => loginUserUseCase(loginData),
  });
};
