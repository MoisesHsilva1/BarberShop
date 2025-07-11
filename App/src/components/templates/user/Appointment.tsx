import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateAppointment } from "../../../hooks/useCreateAppointment";
import { useAppointmentHours } from "../../../hooks/useAppointmentByHours";
import SelectInput from "../../atoms/inputs/SelectInput";
import IconNextRight from "../../atoms/Icons/IconNextRight";
import IconNextLeft from "../../atoms/Icons/IconNextLeft";
import IconNextStep from "../../atoms/Icons/IconNextStep";
import Button from "../../atoms/buttons/Button";

const Appointment = () => {
  const [isCheckedHour, setIsCheckedHour] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);

  const { mutate: createAppointment } = useCreateAppointment();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const {
    data: availableTimes,
    error,
    isLoading,
  } = useAppointmentHours(formattedDate);

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <p className="h-screen flex justify-center items-center text-4xl text-white font-bold">
        Carregando horários disponíveis...
      </p>
    );
  }

  if (error) {
    return <p>Erro ao carregar horários. Tente novamente.</p>;
  }

  const timesToShow = showAll ? availableTimes : availableTimes.slice(0, 3);
  const advanceDay = (data: Date, days: number) => {
    return new Date(data.getFullYear(), data.getMonth(), data.getDate() + days);
  };

  const isPastHour = (hour: string): boolean => {
    const [startHourNum, startMin] = hour
      .split(" às ")[0]
      .split("h")
      .map(Number);

    const startTime = new Date(currentDate.getTime());
    startTime.setHours(startHourNum, startMin || 0, 0, 0);

    return startTime < new Date();
  };

  const handleChangeCheckedHour = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsCheckedHour(event.target.value);
  };

  const handleSaveAppointment = () => {
    const services = JSON.parse(localStorage.getItem("servicesData") || "{}");

    const appointmentData = {
      date: formattedDate,
      time: isCheckedHour,
      services,
    };

    localStorage.setItem(
      "appointmentData",
      JSON.stringify({
        date: currentDate.toLocaleDateString("pt-BR"),
        time: isCheckedHour,
        services,
      })
    );

    createAppointment(appointmentData);
    navigate("/confirmacaoAgendamento");
  };

  return (
    <main>
      <section className="fixed bottom-0 left-0 w-full bg-black h-3/6 shadow-lg overflow-y-auto">
        <section className="flex justify-center -mt-10 h-20">
          <div className="fixed bg-yellow-500 w-auto max-w-[320px] px-4 py-3 rounded-lg shadow-xl">
            <h1 className="text-2xl text-black font-light text-center">
              ESCOLHA A DATA/HORÁRIO
            </h1>
          </div>
        </section>

        <section className="flex justify-center my-4 px-4 gap-6 sm:px-10 lg:px-20">
          <div className="bg-white w-full max-w-[320px] px-5 py-8 rounded-lg shadow-xl">
            <span className="flex justify-between">
              <button
                disabled={
                  currentDate.toLocaleDateString("pt-BR") ===
                  new Date().toLocaleDateString("pt-BR")
                }
                onClick={() => setCurrentDate(advanceDay(currentDate, -1))}
              >
                <IconNextLeft
                  className={`${
                    currentDate.toLocaleDateString("pt-BR") ===
                    new Date().toLocaleDateString("pt-BR")
                      ? "invisible size-6 hover:bg-yellow-500"
                      : "size-6 hover:bg-yellow-500"
                  }`}
                />
              </button>
              <h1 className="tracking-wider font-medium text-center text-lg sm:text-xl mb-4">
                {currentDate.toLocaleDateString("pt-BR")}
              </h1>
              <button
                onClick={() => setCurrentDate(advanceDay(currentDate, 1))}
              >
                <IconNextRight className="size-6 hover:bg-yellow-500" />
              </button>
            </span>

            <ul className="flex flex-wrap gap-1 justify-center overflow-y-auto no-scrollbar">
              {timesToShow?.map((hour: string) => {
                const id = hour.replace(/\s/g, "");
                return (
                  <li key={id}>
                    <SelectInput
                      type="radio"
                      name="options"
                      id={id}
                      value={hour}
                      checked={isCheckedHour === hour}
                      onChange={handleChangeCheckedHour}
                      className="hidden peer"
                      disabled={isPastHour(hour)}
                    />
                    <label
                      htmlFor={id}
                      className={`block px-8 py-4 text-center rounded-lg cursor-pointer hover:bg-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-white transition duration-300 ease-in-out ${
                        isPastHour(hour)
                          ? "bg-red-400 hover:bg-red-600"
                          : "bg-gray-100"
                      }`}
                    >
                      {hour}
                    </label>
                  </li>
                );
              })}
            </ul>

            {availableTimes.length > 3 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-yellow-500 hover:underline font-medium"
                >
                  {showAll ? "Ver menos" : "Ver mais"}
                </button>
              </div>
            )}
          </div>
        </section>

        <div className="flex justify-end mr-[55px]">
          <Button
            onClick={handleSaveAppointment}
            disabled={!isCheckedHour}
            className={`w-10 ${
              isCheckedHour ? "cursor-pointer" : "cursor-not-allowed opacity-50"
            }`}
          >
            <IconNextStep className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 -my-4 sm:-my-12 md:-my-28 mr-6 sm:mr-10 md:mr-14 text-white hover:text-yellow-500" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Appointment;
