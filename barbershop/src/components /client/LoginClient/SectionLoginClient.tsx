import { useState } from "react";
function SectionLoginClient() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isRequirementsPassword = (password: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= minLength;

    return {
      isLongEnough,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar,
    };
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

    const errorsPassoword = isRequirementsPassword(passwordValue);


    if (!passwordValue) {
      setError("");
    }

    switch (true) {
      case !errorsPassoword.isLongEnough:
        setError("O mínimo de caracteres é 8");
        break;
      case !errorsPassoword.hasUpperCase:
        setError("A senha deve conter pelo menos uma letra maiúscula");
        break;
      case !errorsPassoword.hasLowerCase:
        setError("A senha deve conter pelo menos uma letra minúscula");
        break;
      case !errorsPassoword.hasSpecialChar:
        setError("A senha deve conter pelo menos um caractere especial");
        break;
      case !errorsPassoword.hasNumbers:
        setError("A senha deve conter pelo menos um número");
        break;
      default:
        setError("error");
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
        <form
          onSubmit={handleSubmitLogin}
          className="flex flex-col p-6 sm:p-10 md:p-14 bg-black rounded-xl shadow-lg w-full max-w-sm mx-auto mt-6"
        >
          <label className="text-white font-medium">Email</label>
          <input
            className="w-full bg-transparent placeholder:text-slate-100 text-slate-700 text-sm sm:text-base border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="email"
            value={inputEmail}
            onChange={handleChangeEmail}
            placeholder="Digite seu email"
          />

          {error && !inputEmail && (
            <p className="text-red-500 text-sm mt-1">
              O campo de email é obrigatório.
            </p>
          )}

          <label className="text-white font-medium mt-4">Senha</label>
          <input
            className="w-full bg-transparent placeholder:text-slate-100 text-slate-700 text-sm sm:text-base border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="password"
            value={inputPassword}
            onChange={handleChangePassword}
            placeholder="Digite sua senha"
          />

          {error && !inputPassword && (
            <p className="text-red-500 text-sm mt-1">
              O campo de senha é obrigatório.
            </p>
          )}

          <section className="mt-4 w-full max-w-sm mx-auto">
            <button
              type="submit"
              className="w-full text-white font-semi-bold text-xl sm:text-2xl py-3 px-6 hover:bg-yellow-300 bg-yellow-500 rounded-md transition duration-300"
            >
              Login
            </button>
          </section>
        </form>
        <section className="mt-4 text-center">
          <a
            className="underline text-white text-sm sm:text-base"
            href="/client/registre"
          >
            Não tem uma conta? Cadastre-se
          </a>
        </section>
      </main>
    </>
  );
}

export default SectionLoginClient;
