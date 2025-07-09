import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../atoms/buttons/Button";
import Input from "../../atoms/inputs/Input";
import InputPassword from "../../atoms/inputs/InputPassword";
import { useRegisterUser } from "../../../hooks/useRegisterUser";
import { useEffect } from "react";

interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<RegisterForm>();

  const { data, mutate: registerUser, error } = useRegisterUser();

  useEffect(() => {
    if (data) {
      toast.success("Registro realizado com sucesso!!");
      setTimeout(() => navigate("/login"), 1500);
    }
    if (error) {
      toast.error("Error ao se registrar, Tente novamente.");
    }
  }, [data]);

  const onSubmitRegisterUser = (userData: RegisterForm) => {
    registerUser(userData);
    reset();
  };

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <section className="w-[350px] bg-black p-12 rounded-2xl">
          <h1 className="text-3xl text-center text-yellow-600 font-bold">
            Cadastro
          </h1>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmitRegisterUser)}
          >
            <Toaster />
            <Controller
              name="name"
              control={control}
              rules={{ required: "Nome completo é obrigatório" }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Nome Completo"
                  typeInput="text"
                  placeholder="Digite seu nome completo"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
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
                  label="Email"
                  typeInput="email"
                  placeholder="Digite seu e-mail"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Telefone é obrigatório",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Telefone"
                  typeInput="tel"
                  placeholder="Digite seu numero"
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
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
            <Controller
              name="confirmPassword"
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
                validate: (value) =>
                  value === getValues("password") || "As senhas não coincidem",
              }}
              render={({ field }) => (
                <InputPassword
                  {...field}
                  label="Confirmar senha"
                  placeholder="Confirme sua senha"
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
            <Button type="submit" clasName="mt-6">
              Cadastrar
            </Button>
            <p className="text-sm text-center text-white mt-4">
              Já tem uma conta?{" "}
              <a
                onClick={() => navigate("/login")}
                className="text-blue-400 hover:underline"
              >
                Faça login
              </a>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
export default Register;
