import { useState } from "react";
import { To, useNavigate } from "react-router";
import TextInput from "../../UI/inputs/TextInput";
import Form from "../../UI/forms/Form";
import Button from "../../UI/buttons/Button";

function SectionLoginClient() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const navToRegister = (url: To) => {
    navigate(url);
  };

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setInputEmail(emailValue);

    !isEmailValid(emailValue)
      ? setError("Formato de e-mail incorreto")
      : setError("");
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setInputPassword(passwordValue);

    if (!passwordValue) {
      setError("");
    }
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    !inputEmail.trim() ? setError("O campo de email é obrigatório.") : "";

    !inputPassword.trim() ? setError("O campo de senha é obrigatório.") : "";
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        <section className="my-2 text-center">
          <h1 className="text-slate-100 text-4xl sm:text-5xl font-bold">
            LOGIN
          </h1>
        </section>
        <Form onSubmit={handleSubmitLogin}>
          <TextInput
            type="email"
            value={inputEmail}
            onChange={handleChangeEmail}
            label="Email"
            placeholder="Digite seu email"
          />
          {error && !inputEmail && (
            <p className="text-red-500 text-sm mt-1">
              O campo de email é obrigatório.
            </p>
          )}

          <TextInput
            className="w-full bg-transparent placeholder:text-slate-100 text-slate-700 text-sm sm:text-base border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="password"
            value={inputPassword}
            onChange={handleChangePassword}
            label="Senha"
            placeholder="Digite sua senha"
          />
          {error && !inputPassword && (
            <p className="text-red-500 text-sm mt-1">
              O campo de senha é obrigatório.
            </p>
          )}

          <section className="mt-4 w-full max-w-sm mx-auto">
            <Button type="submit">login</Button>
          </section>
        </Form>
        <section className="mt-4 text-center">
          <a
            className="underline text-white text-sm sm:text-base"
            onClick={() => navToRegister("/register")}
          >
            Não tem uma conta? Cadastre-se
          </a>
        </section>
      </main>
    </>
  );
}

export default SectionLoginClient;
