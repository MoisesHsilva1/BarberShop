// import { useState } from "react";
// import { useNavigate } from "react-router";
// import SelectInput from "../../atoms/inputs/SelectInput";
// import Button from "../../atoms/buttons/Button";
// import IconNextStep from "../../atoms/Icons/IconNextStep";

// const SERVICES = [
//   { id: "checkbox-service-1", label: "CORTE DE CABELO" },
//   { id: "checkbox-service-2", label: "BARBA" },
//   { id: "checkbox-service-3", label: "SOBRANCELHA" },
// ];

function Services() {
  // const [checkedServices, setCheckedServices] = useState<string[]>([]);
  // const navigate = useNavigate();

  // const handleCheckBoxServicesChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const { id, checked } = event.target;
  //   const label = SERVICES.find((service) => service.id === id)?.label || "";

  //   setCheckedServices((prev) =>
  //     checked ? [...prev, label] : prev.filter((service) => service !== label)
  //   );
  // };

  // const isButtonDisabled = checkedServices.length === 0;

  // const handleSaveServices = () => {
  //   localStorage.setItem("servicesData", JSON.stringify(checkedServices));
  //   navigate("/agendamento");
  // };

  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-screen px-4 ">
        <div className="max-w-2xl w-full">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-1 rounded-2xl">
            <div className="bg-black rounded-2xl p-12 text-center">
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
                Estamos em Manutenção
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Caso queira agendar um horário, por favor entre em contato
                conosco através do nosso WhatsApp
              </p>
              <div className="flex flex-col items-center mt-6 gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/5511941771789"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir conversa no WhatsApp"
                  className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-5 rounded-lg shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M20.52 3.48A11.94 11.94 0 0012 .02C5.37.02-.02 5.39-.02 12.03c0 2.12.56 4.08 1.53 5.8L0 24l6.41-1.66a11.95 11.95 0 005.59 1.44h.02c6.63 0 12.02-5.37 12.02-12.02 0-3.2-1.24-6.2-3.52-8.08zM12.02 21.2h-.01c-1.8 0-3.56-.47-5.11-1.36l-.37-.22-3.8.99.99-3.71-.24-.38A8.97 8.97 0 013.06 12c0-5 4.06-9.06 9.06-9.06 2.42 0 4.69.94 6.41 2.66a8.99 8.99 0 012.66 6.4c0 5-4.06 9.06-9.06 9.06z" />
                    <path d="M17.24 14.32c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.45-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.55-.46-.47-.64-.48l-.55-.01c-.19 0-.5.07-.77.36-.27.29-1.05 1.03-1.05 2.5 0 1.46 1.08 2.88 1.23 3.08.15.19 2.12 3.3 5.16 4.63 3.04 1.34 3.04.89 3.59.83.55-.07 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
                  </svg>
                  Abrir WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard?.writeText("+55 11 94177-1789")
                  }
                  className="inline-flex items-center gap-2 border border-yellow-500 text-white hover:bg-yellow-600 hover:text-black py-3 px-4 rounded-lg font-medium transition"
                  aria-label="Copiar número para área de transferência"
                >
                  Copiar número
                </button>
              </div>
              <div className="mt-8 flex gap-2 justify-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
          <p className="text-white text-center mt-8 text-sm">
            Voltaremos em breve com uma experiência melhorada
          </p>
        </div>
      </section>
      {/* <section className="fixed bottom-0 left-0 w-full bg-black h-[60%] sm:h-[50%] shadow-lg">
        <div className="flex justify-center -mt-10 h-20">
          <div className="bg-yellow-500 w-auto max-w-[320px] px-6 py-4 rounded-lg shadow-xl">
            <h1 className="text-2xl text-black font-light text-center">
              ESCOLHA O SERVIÇO
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-lg text-white font-light text-center px-6 sm:px-12">
            SELECIONE OS SERVIÇOS DESEJADOS
          </p>
        </div>
        <ul className="flex justify-center items-center gap-8 mx-6 mt-8 flex-col sm:flex-row bg-black">
          {SERVICES.map(({ id, label }) => (
            <li key={id} className="w-full sm:w-auto flex justify-center">
              <SelectInput
                id={id}
                type="checkbox"
                onChange={handleCheckBoxServicesChange}
                checked={checkedServices.includes(label)}
                className="hidden peer"
              />
              <label
                htmlFor={id}
                className={`bg-white w-full sm:w-64 py-4 px-6 rounded-lg shadow-md cursor-pointer text-center text-black font-medium transform transition duration-300 ease-in-out break-words ${
                  checkedServices.includes(label)
                    ? "bg-yellow-500 text-white"
                    : "hover:bg-yellow-500 hover:text-white"
                } hover:scale-105`}
              >
                {label}
              </label>
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-4 sm:mt-0 mx-6 sm:mx-12">
          <Button
            className={`text-white block mx-8 ${
              isButtonDisabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            onClick={handleSaveServices}
            disabled={isButtonDisabled}
          >
            <IconNextStep className="w-24 h-24 hover:text-yellow-500 text-white" />
          </Button>
        </div>
      </section> */}
    </main>
  );
}

export default Services;
