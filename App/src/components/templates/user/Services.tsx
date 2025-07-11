import { useState } from "react";
import { useNavigate } from "react-router";
import SelectInput from "../../atoms/inputs/SelectInput";
import Button from "../../atoms/buttons/Button";
import IconNextStep from "../../atoms/Icons/IconNextStep";

const SERVICES = [
  { id: "checkbox-service-1", label: "CORTE DE CABELO" },
  { id: "checkbox-service-2", label: "BARBA" },
  { id: "checkbox-service-3", label: "SOBRANCELHA" },
];

function Services() {
  const [checkedServices, setCheckedServices] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleCheckBoxServicesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, checked } = event.target;
    const label = SERVICES.find((service) => service.id === id)?.label || "";

    setCheckedServices((prev) =>
      checked ? [...prev, label] : prev.filter((service) => service !== label)
    );
  };

  const isButtonDisabled = checkedServices.length === 0;

  const handleSaveServices = () => {
    localStorage.setItem("servicesData", JSON.stringify(checkedServices));
    navigate("/agendamento");
  };

  return (
    <main>
      <section className="fixed bottom-0 left-0 w-full bg-black h-[60%] sm:h-[50%] shadow-lg">
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
      </section>
    </main>
  );
}

export default Services;
