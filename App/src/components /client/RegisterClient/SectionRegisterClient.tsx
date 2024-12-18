import { useState } from "react";
import Form from "../../../UI/forms/Form";
import Input from "../../../UI/inputs/Input";

function SectionRegisterClient() {
const [inputName, setInputName ] =  useState("")

const handleChageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const NameValue =  e.target.value;
    setInputName(NameValue);
}

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
            <Input
              type="text"
              label="Nome"
              placeholder="Digite seu primeiro nome"
              onChange={handleChageName}
              value={inputName}
            />
          </Form>
        </section>
      </main>
    </>
  );
}
export default SectionRegisterClient;
