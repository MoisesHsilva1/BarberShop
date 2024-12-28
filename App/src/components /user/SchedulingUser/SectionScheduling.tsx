import React, { useState } from "react";
import SelectInput from "../../UI/inputs/SelectInput";
import IconNextRight from "../../UI/Icons/IconNextRight";
import IconNextLeft from "../../UI/Icons/IconNextLeft";
import IconNextDown from "../../UI/Icons/IconNextDown";
import IconNextUp from "../../UI/Icons/IconNextrUp";
import IconNextStep from "../../UI/Icons/IconNextStep";
import Button from "../../UI/buttons/Button";
import { To, useNavigate } from "react-router";

function SectionSchedulingUser() {
  const [isCheckedHour, setIsCheckedHour] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [availableHours, setAvailableHours] = useState([
    { id: "hour1", time: "9h - 9h50" },
    { id: "hour2", time: "10h - 10h50" },
    { id: "hour3", time: "11h - 11h50" },
  ]);
  const [, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const daysWekend = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const navigate = useNavigate();

  const navToInformationUser = (url: To) => {
    navigate(url);
  };

  const advanceDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const returnDate = () => {
    const returnDate = new Date(currentDate);
    returnDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(returnDate < new Date() ? new Date() : returnDate);
  };

  const getCurrentDay = () => {
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const dayWekend = daysWekend[currentDate.getDay()];
    return `${day} ${month.toUpperCase()}, ${dayWekend.toUpperCase()}`;
  };

  const loadFirstHours = () => {
    const firstHours = [
      { id: "hour1", time: "9h - 9h50" },
      { id: "hour2", time: "10h - 10h50" },
      { id: "hour3", time: "11h - 11h50" },
    ];
    setAvailableHours(firstHours);
  };

  const loadSecondHours = () => {
    const secondHours = [
      { id: "hour4", time: "14h - 14h50" },
      { id: "hour5", time: "15h - 15h50" },
      { id: "hour6", time: "16h - 16h50" },
    ];
    setAvailableHours(secondHours);
  };

  const handleChangeCheckedHour = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedHourId = event.target.value;
    setIsCheckedHour(selectedHourId);
    const selectedTime = availableHours.find(hour => hour.id === selectedHourId)?.time;
    setSelectedHour(selectedTime || "");
  };

  const handleSaveSelection = () => {
    const selectedDateString = getCurrentDay();
    setSelectedDate(selectedDateString);
    localStorage.setItem("selectedDate", selectedDateString);
    localStorage.setItem("selectedHour", selectedHour);
  };

  return (
    <>
      <main>
        <section className="fixed bottom-0 left-0 w-full bg-black h-3/6 shadow-lg">
          <section className="flex justify-center -mt-10 h-20">
            <div className="bg-yellow-500 w-auto max-w-[320px] px-4 py-3 rounded-lg shadow-xl">
              <h1 className="text-2xl text-black font-light text-center">ESCOLHA A DATA/HORÁRIO</h1>
            </div>
          </section>

          <section className="flex justify-center my-4 px-4 sm:px-10 lg:px-20">
            <div className="bg-white w-full max-w-[320px] px-5 py-8 rounded-lg shadow-xl">
              <h1 className="tracking-wider font-medium text-center text-lg sm:text-xl mb-4">{getCurrentDay()}</h1>
              <Button onClick={returnDate} clasName="absolute">
                <IconNextLeft className="absolute -mt-12 size-6 hover:bg-yellow-500" />
              </Button>

              <Button onClick={advanceDate} clasName="absolute">
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
                    />
                    <label
                      htmlFor={hour.id}
                      className="block px-8 py-4 text-center bg-gray-100 rounded-lg cursor-pointer hover:bg-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-white transition duration-300 ease-in-out"
                    >
                      {hour.time}
                    </label>
                  </li>
                ))}
              </ul>
              <Button onClick={loadSecondHours} clasName="">
                <IconNextDown className="size-6 mx-24 hover:bg-yellow-500" />
              </Button>
              <Button onClick={loadFirstHours} clasName="absolute -ml-12">
                <IconNextUp />
              </Button>
            </div>
          </section>
          <Button
            onClick={() => {
              handleSaveSelection();
              navToInformationUser("/informacoesAgendamento");
            }}
            disabled={!isCheckedHour}
            className={`block ml-auto ${isCheckedHour ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
          >
            <IconNextStep
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 -my-4 sm:-my-12 md:-my-28 mr-6 sm:mr-10 md:mr-14 text-white hover:text-yellow-500"
            />
          </Button>
        </section>
      </main>
    </>
  );
}

export default SectionSchedulingUser;
