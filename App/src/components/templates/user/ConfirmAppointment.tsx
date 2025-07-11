function ConfirmationAppointment() {
  const fullAppointmentData = JSON.parse(
    localStorage.getItem("appointmentData") || "{}"
  );

  return (
    <>
      <main className="h-screen flex justify-center items-center overflow-auto px-4 md:px-24">
        <section className="flex items-start flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-yellow-500 mb-4 flex flex-col space-y-2">
            <span>AGENDAMENTO</span>
            <span>CONFIRMADO</span>
            <span>COM SUCESSO!</span>
          </h1>
          <section>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl">
              DIA
              <span className="ml-2 font-semibold">
                {fullAppointmentData.date}.
              </span>
            </h2>

            <h2 className="text-white text-xl sm:text-2xl md:text-3xl">
              DE
              <span className="ml-2 font-semibold">
                {fullAppointmentData.time}.
              </span>
            </h2>

            <h2 className="text-white text-xl sm:text-2xl md:text-3xl">
              SERVIÇO:
              <span className="ml-2 font-semibold">
                {fullAppointmentData.services?.join(" + ") || "N/A"}
              </span>
            </h2>
          </section>
        </section>
      </main>
      <style>{`
        body, html {
          overflow: hidden;
          margin: 0;
        }
        main {
          height: 100vh;
        }
      `}</style>
    </>
  );
}

export default ConfirmationAppointment;
