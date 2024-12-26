import React, { useState } from "react";
import { To, useNavigate } from "react-router";
import Form from "../../UI/forms/Form";
import TextInput from "../../UI/inputs/TextInput";
import Button from "../../UI/buttons/Button";

function SectionRegisterClient() {
  const [inputName, setInputName] = useState("");
  const [inputSurName, setInputSurName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();

  const navToLogin = (url: To) => {
    navigate(url);
  };

  const handleChageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const NameValue = e.target.value;
    setInputName(NameValue);
  };

  const handleChangeSurName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const surNameValue = e.target.value;
    setInputSurName(surNameValue);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setInputEmail(emailValue);
  };

  const handleChangePassoword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setInputPassword(passwordValue);
  };

  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        <section className="my-2 text-center">
          <h1 className="text-slate-100 text-4xl sm:text-5xl font-bold">
            CADASTRO
          </h1>
        </section>
        <section>
          <Form onSubmit={handleSubmitRegister}>
            <TextInput
              type="text"
              label="Nome"
              placeholder="Digite seu primeiro nome"
              onChange={handleChageName}
              value={inputName}
            />
            <TextInput
              type="text"
              label="Sobrenome"
              placeholder="Digite seu segundo nome"
              onChange={handleChangeSurName}
              value={inputSurName}
            />
            <TextInput
              type="email"
              label="Email"
              placeholder="Digite seu email"
              onChange={handleChangeEmail}
              value={inputEmail}
            />
            <TextInput
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              onChange={handleChangePassoword}
              value={inputPassword}
            />
            <section className="mt-8">
              <Button type="submit">Cadastrar</Button>
            </section>
          </Form>
        </section>
        <section>
          <section className="mt-4 text-center">
            <a
              className="underline text-white text-sm sm:text-base"
              onClick={() => navToLogin("/login")}
            >
              Já tem conta? Login
            </a>
          </section>
        </section>
      </main>
    </>
  );
}
export default SectionRegisterClient;
