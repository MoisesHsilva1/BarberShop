import { useState } from "react";
import TextInput from "../../UI/inputs/TextInput";
import Button from "../../UI/buttons/Button";
import IconNextStep from "../../UI/Icons/IconNextStep";
import { useNavigate } from "react-router";
import CustomConfirm from "../../UI/CustomConfirm";

function SectionInformationUser() {
  const [userName, setUserName] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errors, setErrors] = useState({ phone: "", email: "" });
  const [isConfirmAppointment, setIsConfirmAppointment] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => /^\d{10,15}$/.test(phone);

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleChangePhoneUser = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setPhoneUser(value);
    setErrors((prev) => ({
      ...prev,
      phone: validatePhone(value) ? "" : "Número de telefone inválido",
    }));
  };

  const handleChangeUserEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setUserEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value) ? "" : "E-mail inválido",
    }));
  };

  const handleOpenConfirm = () => {
    setIsConfirmAppointment(true);
  };

  const handleCloseConfirm = () => {
    setIsConfirmAppointment(false);
  };

  const handleSaveUserInfo = () => {
    const appointmentData = JSON.parse(
      localStorage.getItem("appointmentData") || "{}"
    );
    const userData = { userName, userEmail, phoneUser };

    const fullAppointmentData = { ...appointmentData, user: userData };

    localStorage.setItem(
      "fullAppointmentData",
      JSON.stringify(fullAppointmentData)
    );

    navigate("/confirmacaoAgendamento");
  };

  return (
    <main>
      <section className="fixed bottom-0 left-0 w-full bg-black h-3/6 shadow-lg">
        <section className="flex justify-center -mt-10 h-20">
          <div className="bg-yellow-500 w-auto max-w-[90%] md:max-w-[320px] px-6 py-4 rounded-lg shadow-xl">
            <h1 className="text-lg md:text-2xl text-black font-light text-center">
              DADOS DO CLIENTE
            </h1>
          </div>
        </section>
        <section className="flex justify-center mt-4 md:mt-4">
          <p className="text-sm md:text-lg text-white font-light text-center px-4 md:px-12">
            INSIRA ABAIXO AS INFORMAÇÕES SOBRE VOCÊ
          </p>
        </section>
        <section className="flex flex-col justify-center items-center gap-4 mt-6 px-4">
          <TextInput
            type="text"
            placeholder="NOME:"
            className="w-full md:w-6/12 lg:w-4/12 bg-transparent placeholder:text-slate-100 text-white text-sm md:text-base border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={userName}
            onChange={handleChangeUserName}
          />
          <span className="text-red-500 text-xs">{errors.phone}</span>
          <TextInput
            type="tel"
            placeholder="TELEFONE:"
            className="w-full md:w-6/12 lg:w-4/12 bg-transparent placeholder:text-slate-100 text-white text-sm md:text-base border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={phoneUser}
            onChange={handleChangePhoneUser}
          />
          <span className="text-red-500 text-xs">{errors.email}</span>
          <TextInput
            type="email"
            placeholder="E-MAIL:"
            className="w-full md:w-6/12 lg:w-4/12 bg-transparent placeholder:text-slate-100 text-white text-sm md:text-base border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={userEmail}
            onChange={handleChangeUserEmail}
          />
        </section>
        <Button
          onClick={handleOpenConfirm}
          disabled={!userEmail || !userName || !phoneUser}
          className={`block ml-auto ${
            !userEmail || !userName || !phoneUser
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
        >
          <IconNextStep
            className={`
      w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
      -my-0 sm:-my-12 md:-my-28 
      mr-6 sm:mr-10 md:mr-14 
     text-white  hover:text-yellow-500`}
          />
        </Button>
      </section>
      {isConfirmAppointment && (
        <CustomConfirm
          onConfirm={handleSaveUserInfo}
          onCancel={handleCloseConfirm}
          title="Confirme seu agendamento"
          text="Você está prestes a confirmar o agendamento. Deseja continuar?"
          confirmLabel="Confirmar"
          cancelLabel="cancelar"
        />
      )}
    </main>
  );
}

export default SectionInformationUser;
