import { useState } from "react";
import Button from "../../UI/buttons/Button";
import IconNextRight from "../../UI/Icons/IconNextRight";
import IconNextLeft from "../../UI/Icons/IconNextLeft";
import getDataAppointment from "../../../../hooks/getDataAppointment";

function SectionViewSchedulingClient() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const appointments = getDataAppointment(selectedDate);

  console.log("Agendamentos retornados:", appointments);


  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 1; 
  };

  const nextDate = (days: number) => {
    let newDate = new Date(selectedDate);
    do {
      newDate.setDate(newDate.getDate() + days);
    } while (isWeekend(newDate)); 
    setSelectedDate(newDate < new Date() ? new Date() : newDate); 
  };

  const formattedDate = selectedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  }).toUpperCase(); 

  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="bg-black shadow-md rounded-lg w-full max-w-lg p-6 mt-12">
        <h2 className="text-white text-3xl font-bold mb-4">
          Agendamentos para {formattedDate} 
        </h2>
        
        <div className="flex justify-start mb-6">
          <Button onClick={() => nextDate(-1)} className="ml-2">
            <IconNextLeft className="text-white size-6" />
          </Button>
        </div>
        
        <div className="flex justify-end -mt-12 mb-6">
          <Button onClick={() => nextDate(1)} className="ml-2">
            <IconNextRight className="text-white size-6" />
          </Button>
        </div>

        {isWeekend(selectedDate) ? (
          <p className="text-white text-center">Sem agendamentos disponíveis para domingos ou segundas-feiras.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {appointments.length > 0 ? (
              appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="p-4 rounded-md shadow-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold">{appointment.user.userName}</p>
                    <p className="font-bold">{appointment.time}</p>
                    <ul>
                      {appointment.services.map((service, idx) => (
                        <li key={idx} className="text-white">{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center">Nenhum agendamento para este dia.</p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default SectionViewSchedulingClient;
