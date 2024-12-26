import SelectInput from "../../UI/inputs/SelectInput";
import Button from "../../UI/buttons/Button";
import IconNextStep from "../../UI/Icons/IconNextStep";
import React, { useState } from "react";
import { To, useNavigate } from "react-router";

function ServicesSection() {
  const [checkedServices, setCheckedServices] = useState([]);

  const handleCheckBoxServicesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, checked } = event.target;
    setCheckedServices({ ...checkedServices, [id]: checked });
  };

  const navigate = useNavigate();

  const navToScheduling = (url: To) => {
    navigate(url);
  };

  return (
    <>
      <main>
        <section className="fixed bottom-0 left-0 w-full bg-black h-3/6 shadow-lg">
          <div className="flex justify-center -mt-10 h-20">
            <div className="bg-yellow-500 w-auto max-w-[320px] px-6 py-4 rounded-lg shadow-xl">
              <h1 className="text-2xl text-black font-light text-center">
                ESCOLHA O SERVIÇO
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <p className="text-lg text-white font-light text-center px-6 sm:px-12">
              SELECIONE OS SERVIÇOS DESEJADOS
            </p>
          </div>
          <div>
            <ul className="flex justify-center gap-6 mx-6 mt-12 flex-wrap bg-black">
              <li>
                <SelectInput
                  onChange={handleCheckBoxServicesChange}
                  checked={checkedServices[0]}
                  id="checkbox-service-1"
                  type="checkbox"
                  className="hidden peer"
                />
                <label
                  htmlFor="checkbox-service-1"
                  className="bg-white w-auto sm:w-1/3 py-4 px-32 rounded-lg shadow-md cursor-pointer hover:bg-yellow-500 peer-checked:bg-yellow-500 hover:text-white transition duration-300 ease-in-out text-center text-black font-medium transform hover:scale-105"
                >
                  CORTE DE CABELO
                </label>
              </li>
              <li>
                <SelectInput
                  onChange={handleCheckBoxServicesChange}
                  checked={checkedServices[1]}
                  id="checkbox-service-2"
                  type="checkbox"
                  className="hidden peer"
                />
                <label
                  htmlFor="checkbox-service-2"
                  className="bg-white w-auto sm:w-1/3 py-4 px-32 rounded-lg shadow-md cursor-pointer hover:bg-yellow-500 peer-checked:bg-yellow-500 hover:text-white transition duration-300 ease-in-out text-center text-black font-medium transform hover:scale-105"
                >
                  BARBA
                </label>
              </li>
              <li>
                <SelectInput
                  onChange={handleCheckBoxServicesChange}
                  checked={checkedServices[2]}
                  id="checkbox-service-3"
                  type="checkbox"
                  className="hidden peer"
                />
                <label
                  htmlFor="checkbox-service-3"
                  className="bg-white w-auto sm:w-1/3 py-4 px-32 rounded-lg shadow-md cursor-pointer hover:bg-yellow-500 peer-checked:bg-yellow-500 hover:text-white transition duration-300 ease-in-out text-center text-black font-medium transform hover:scale-105"
                >
                  SOBRANCELHA
                </label>
              </li>
            </ul>
          </div>
          <div className="flex justify-end gap-6 my-12 mx-12">
            <Button
              clasName="text-white mx-8"
              onClick={() => navToScheduling("/agendamento")}
              disabled={checkedServices.length == 0 ? true : false}
            >
              <IconNextStep
                className={`w-24 h-24 -my-4 -mx-10 hover:text-yellow-500 ${
                  checkedServices.length == 0 ? "text-black hover:text-" : "text-white"
                }`}
              />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default ServicesSection;
