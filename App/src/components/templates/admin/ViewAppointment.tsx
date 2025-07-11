import { useState, useMemo } from "react";
import Button from "../../atoms/buttons/Button";
import IconNextRight from "../../atoms/Icons/IconNextRight";
import IconNextLeft from "../../atoms/Icons/IconNextLeft";
import { useAppointmentsByDate } from "../../../hooks/useAppointmentsByDate";
import { useUsersByIds } from "../../../hooks/useUsersByIds";

type User = {
  _id: string;
  uid: string;
  name: string;
  phone: string;
};

type Appointment = {
  id: string;
  userId: string;
  date: string;
  time: string;
  services: string[];
};

function nextValidDate(baseDate: Date, direction: number): Date {
  const newDate = new Date(baseDate);
  do {
    newDate.setDate(newDate.getDate() + direction);
  } while ([0, 1].includes(newDate.getDay())); 
  return newDate;
}

function ViewAppointment() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return [0, 1].includes(today.getDay()) ? nextValidDate(today, 1) : today;
  });

  const dateStr = useMemo(
    () => selectedDate.toISOString().split("T")[0],
    [selectedDate]
  );

  const {
    data: appointments = [],
    isLoading,
    error,
  } = useAppointmentsByDate(dateStr);

  const userIds = useMemo(
    () => appointments.map((a: { userId: string; }) => a.userId),
    [appointments]
  );

  const { data: users = [] } = useUsersByIds(userIds) as unknown as { data: User[] };

  const userMap = useMemo(() => {
    const map = new Map<string, User>();
    users.forEach((user) => map.set(user.uid, user));
    return map;
  }, [users]);

  const formattedDate = useMemo(() => {
    const day = selectedDate.getDate();
    const weekday = selectedDate
      .toLocaleDateString("pt-BR", { weekday: "short" })
      .replace(/[.,]/g, "")
      .toUpperCase();
    const month = selectedDate
      .toLocaleDateString("pt-BR", { month: "short" })
      .replace(/[.,]/g, "")
      .toUpperCase();
    return `${day} ${month}, ${weekday}`;
  }, [selectedDate]);

  function handleChangeDate(direction: number) {
    const today = new Date();
    const newDate = nextValidDate(selectedDate, direction);
    setSelectedDate(newDate < today ? today : newDate);
  }

  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="bg-black shadow-md rounded-lg w-full max-w-lg p-6 mt-12">
        <h2 className="text-white text-2xl font-bold mb-4">
          AGENDAMENTOS PARA {formattedDate}
        </h2>

        <div className="flex justify-between mb-6">
          <Button
            onClick={() => handleChangeDate(-1)}
            className="ml-2"
            disabled={isLoading}
          >
            <IconNextLeft className="text-white size-6" />
          </Button>
          <Button
            onClick={() => handleChangeDate(1)}
            className="ml-2"
            disabled={isLoading}
          >
            <IconNextRight className="text-white size-6" />
          </Button>
        </div>

        {!isLoading && !error && appointments.length > 0 ? (
          appointments.map((appointment: Appointment) => {
            const user = userMap.get(appointment.userId);

            return (
              <div
                key={appointment.id}
                className="p-4 mb-4 rounded-md shadow-md flex justify-between items-start bg-gray-800"
              >
                <div>
                  <p className="font-bold text-white">
                    {user?.name || "Usuário desconhecido"}
                  </p>
                  <p className="font-bold text-gray-300">
                    CONTATO: {user?.phone || "N/A"}
                  </p>
                  <p className="font-bold text-gray-300">
                    HORÁRIO: {appointment.time}
                  </p>
                  <p className="font-bold text-white mt-2">SERVIÇOS:</p>
                  <ul className="text-gray-400 list-disc list-inside">
                    {appointment.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white text-center">
            Nenhum agendamento para este dia.
          </p>
        )}
      </section>
    </main>
  );
}

export default ViewAppointment;
