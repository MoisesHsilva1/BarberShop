import { useState } from "react";
import SelectInput from "../../UI/inputs/SelectInput";
import IconNextRight from "../../UI/Icons/IconNextRight";
import IconNextLeft from "../../UI/Icons/IconNextLeft";
import IconNextDown from "../../UI/Icons/IconNextDown";
import IconNextUp from "../../UI/Icons/IconNextrUp";
import IconNextStep from "../../UI/Icons/IconNextStep";
import Button from "../../UI/buttons/Button";
import { useNavigate } from "react-router";

const SectionSchedulingUser = () => {
  const [isCheckedHour, setIsCheckedHour] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [availableHours, setAvailableHours] = useState([
    { id: "hour1", time: "9h às 9h50" },
    { id: "hour2", time: "10h às 10h50" },
    { id: "hour3", time: "11h às 11h50" },
  ]);
  const [time, setTime] = useState("");
  const daysOfWekend = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
  const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];
  const navigate = useNavigate();

  const adjustDate = (days: number) => {
    const invalidDays = [0, 1];
    let newDate = new Date(currentDate.getTime());
    do {
      newDate.setDate(newDate.getDate() + days);
    } while (invalidDays.includes(newDate.getDay()));
    setCurrentDate(newDate);
    setCurrentDate(newDate < new Date() ? new Date() : newDate);
  };

  const getCurrentDay = () => {
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const dayWekend = daysOfWekend[currentDate.getDay()];
    return `${day} ${month}, ${dayWekend}`;
  };

  const isPastHour = (hour: string): boolean => {
    const [startHourNum, startMin] = hour
      .split(" às ")[0]
      .split("h")
      .map(Number);
    const startTime = new Date(currentDate.getTime());
    startTime.setHours(startHourNum, startMin, 0, 0);

    return startTime < new Date();
  };

  const loadHours = (hours: { id: string; time: string }[]) => {
    setAvailableHours(hours);
  };

  const handleChangeCheckedHour = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const timeId = event.target.value;
    setIsCheckedHour(timeId);
    setTime(availableHours.find((hour) => hour.id === timeId)?.time || "");
  };

  const handleSaveAppointment = () => {
    localStorage.setItem(
      "appointmentData",
      JSON.stringify({
        date: getCurrentDay(),
        time,
        services: JSON.parse(localStorage.getItem("servicesData") || "{}"),
      })
    );
    navigate("/informacoesAgendamento");
  };

  return (
    <main>
      <section className="fixed bottom-0 left-0 w-full bg-black h-3/6 shadow-lg">
        <section className="flex justify-center -mt-10 h-20">
          <div className="bg-yellow-500 w-auto max-w-[320px] px-4 py-3 rounded-lg shadow-xl">
            <h1 className="text-2xl text-black font-light text-center">
              ESCOLHA A DATA/HORÁRIO
            </h1>
          </div>
        </section>

        <section className="flex justify-center my-4 px-4 sm:px-10 lg:px-20">
          <div className="bg-white w-full max-w-[320px] px-5 py-8 rounded-lg shadow-xl">
            <Button onClick={() => adjustDate(-1)} clasName="absolute">
              <IconNextLeft className="absolute -mt-1 size-6 hover:bg-yellow-500" />
            </Button>
            <h1 className="tracking-wider font-medium text-center text-lg sm:text-xl mb-4">
              {getCurrentDay()}
            </h1>
            <Button onClick={() => adjustDate(1)} clasName="absolute">
              <IconNextRight className="absolute ml-64 -mt-12 size-6 hover:bg-yellow-500" />
            </Button>

            <ul className="flex flex-wrap gap-1 justify-center">
              {availableHours.map((hour) => (
                <li key={hour.id}>
                  <SelectInput
                    type="radio"
                    name="options"
                    id={hour.id}
                    value={hour.id}
                    checked={isCheckedHour === hour.id}
                    onChange={handleChangeCheckedHour}
                    className="hidden peer"
                    disabled={isPastHour(hour.time)}
                  />
                  <label
                    htmlFor={hour.id}
                    className={`block px-8 py-4 text-center bg-gray-100 rounded-lg cursor-pointer hover:bg-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-white transition duration-300 ease-in-out ${
                      isPastHour(hour.time)
                        ? "bg-red-400 hover:bg-red-600"
                        : "bg-gray-100"
                    }`}
                  >
                    {hour.time}
                  </label>
                </li>
              ))}
            </ul>

            <Button
              clasName=""
              onClick={() =>
                loadHours([
                  { id: "hour4", time: "14h às 14h50" },
                  { id: "hour5", time: "15h às 15h50" },
                  { id: "hour6", time: "16h às 16h50" },
                ])
              }
            >
              <IconNextDown className="size-6 mx-24 hover:bg-yellow-500" />
            </Button>

            <Button
              onClick={() =>
                loadHours([
                  { id: "hour1", time: "9h às 9h50" },
                  { id: "hour2", time: "10h às 10h50" },
                  { id: "hour3", time: "11h às 11h50" },
                ])
              }
              clasName="absolute -ml-12"
            >
              <IconNextUp />
            </Button>
          </div>
        </section>

        <Button
          onClick={handleSaveAppointment}
          disabled={!isCheckedHour}
          className={`block ml-auto ${
            isCheckedHour ? "cursor-pointer" : "cursor-not-allowed opacity-50"
          }`}
        >
          <IconNextStep className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 -my-4 sm:-my-12 md:-my-28 mr-6 sm:mr-10 md:mr-14 text-white hover:text-yellow-500" />
        </Button>
      </section>
    </main>
  );
};

export default SectionSchedulingUser;
