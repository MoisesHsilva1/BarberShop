import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { useLoginUser } from "../../../hooks/useLoginUser";
import toast, { Toaster } from "react-hot-toast";
import Input from "../../atoms/inputs/Input";
import InputPassword from "../../atoms/inputs/InputPassword";
import Button from "../../atoms/buttons/Button";
import { useEffect } from "react";

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const { mutate: loginUser, data, error } = useLoginUser();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>();

  useEffect(() => {
    if (data) {
      toast.success("Login realizado com sucesso!!");
      setTimeout(() => navigate("/"), 1300);
    }

    if (error) {
      toast.error("Erro ao realizar Login.");
    }
  }, [data, error]);

  const onSubmitLogin = (loginData: LoginForm) => {
    loginUser(loginData);
    reset();
  };

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <section className="w-[350px] bg-black p-12 rounded-2xl">
          <h1 className="text-white text-3xl text-center text-yellow-600 font-bold">
            Login
          </h1>
          <form action="" onSubmit={handleSubmit(onSubmitLogin)}>
            <Toaster />
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  typeInput="email"
                  label="Email"
                  placeholder="Digite seu e-mail"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Senha é obrigatória",
                maxLength: {
                  value: 8,
                  message: "Senha deve ter no máximo 8 caracteres",
                },
                minLength: {
                  value: 8,
                  message: "Senha deve ter no mínimo 8 caracteres",
                },
              }}
              render={({ field }) => (
                <InputPassword
                  {...field}
                  label="Senha"
                  placeholder="Digite sua senha"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <Button clasName="mt-6  w-full">Login</Button>
            <p className="text-sm text-center text-white mt-4">
              Ainda não tem uma conta?{" "}
              <a
                onClick={() => navigate("/cadastro")}
                className="text-blue-400 hover:underline"
              >
                Cadastre-se
              </a>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
export default Login;
