import { useState, useMemo } from "react";
import Button from "../../UI/buttons/Button";
import IconNextRight from "../../UI/Icons/IconNextRight";
import IconNextLeft from "../../UI/Icons/IconNextLeft";
import useAppointmentsByDate from "../../../../hooks/useAppointmentsByDate";

function SectionViewSchedulingClient() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = useMemo(() => {
    const day = selectedDate.getDate();
    const weekday = selectedDate
      .toLocaleDateString("pt-BR", { weekday: "short" })
      .replace(/[.,]/g, "")
      .toUpperCase();
    const month = selectedDate
      .toLocaleDateString("en-US", { month: "short" })
      .toUpperCase();

    return `${day} ${month}, ${weekday}`;
  }, [selectedDate]);

  const { appointments, error, loading } = useAppointmentsByDate(formattedDate);

  const isWeekend = (date: Date) => [0, 1].includes(date.getDay());

  const changeDate = (days: number) => {
    let newDate = new Date(selectedDate);
    do {
      newDate.setDate(newDate.getDate() + days);
    } while (isWeekend(newDate));
    setSelectedDate(newDate < new Date() ? new Date() : newDate);
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="bg-black shadow-md rounded-lg w-full max-w-lg p-6 mt-12">
        <h2 className="text-white text-2xl font-bold mb-4">
          AGENDAMENTOS PARA {formattedDate}
        </h2>

        <div className="flex justify-between mb-6">
          <Button
            onClick={() => changeDate(-1)}
            className="ml-2"
            disabled={loading}
          >
            <IconNextLeft className="text-white size-6" />
          </Button>
          <Button
            onClick={() => changeDate(1)}
            className="ml-2"
            disabled={loading}
          >
            <IconNextRight className="text-white size-6" />
          </Button>
        </div>

        {isWeekend(selectedDate) ? (
          <p className="text-white text-center">
            Sem agendamentos disponíveis para domingos ou segundas-feiras.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {!loading && !error && appointments.length > 0 ? (
              appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="p-4 rounded-md shadow-md flex justify-between items-center bg-gray-800"
                >
                  <div>
                    <p className="font-bold text-white">
                      {appointment.user.userName}
                    </p>
                    <p className="font-bold text-gray-300">
                      CONTATO: {appointment.user.phoneUser}
                    </p>
                    <p className="font-bold text-gray-300">
                      HORÁRIO: {appointment.time}
                    </p>
                    <ul className="mt-3 font-bold text-white">
                      SERVIÇOS:
                      {appointment.services.map(
                        (service: string, idx: number) => (
                          <li key={idx} className="text-gray-400">
                            {service}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center">
                Nenhum agendamento para este dia.
              </p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default SectionViewSchedulingClient;
