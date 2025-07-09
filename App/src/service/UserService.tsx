import { RegisterUserDto } from "../types/Dto/RegisterUserDto";
import { api } from "./api";

export const UserService = {
  registerUser: async (user: RegisterUserDto) => {
    const response = await api.post("/users/create", user);

    return response.data;
  },
};
