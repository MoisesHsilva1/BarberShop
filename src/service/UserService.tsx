import { signInWithEmailAndPassword } from "@firebase/auth";
import { LoginUserDto } from "../types/interface/LoginUserDto";
import { RegisterUserDto } from "../types/interface/RegisterUserDto";
import { api } from "./api";
import authFireBase from "../config/firebase/firebase";
import { User } from "../types/interface/reponseUser";

export const UserService = {
  registerUser: async (user: RegisterUserDto) => {
    const response = await api.post("/users/create", user);

    return response.data;
  },
  loginUser: async (loginData: LoginUserDto) => {
    const userCredential = await signInWithEmailAndPassword(
      authFireBase,
      loginData.email,
      loginData.password
    );

    const idToken = await userCredential.user.getIdToken();

    const reponse = await api.post("/auth/login", { idToken });

    return reponse.data;
  },
  getUsersByIds: async (ids: string[]): Promise<User[]> => {
    const response = await api.get("/users", {
      params: {
        ids: ids.join(","),
      },
    });

    return response.data;
  },
  getUserIsAdmin: async (id: string): Promise<Boolean> => {
    const response = await api.get(`/users/admin/${id}`);

    return response.data;
  },
};
