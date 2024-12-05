import { useEffect } from "react";

function SectionUser() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <section className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl text-center font-sans">
            <h1 className="font-semibold">NASCK HAIR</h1>
            <h2 className="text-2xl font-light sm:text-3xl md:text-4xl">
              UM NOVO CONCEITO SOBRE BARBEARIA
            </h2>
          </div>
          <div className="mt-14 text-center">
            <button className="bg-yellow-500 border border-transparent rounded-2xl py-3 px-10 w-full sm:px-6 sm:py-3 text-sm sm:text-lg md:text-xl font-light">
              AGENDAMENTO
            </button>
            <h3 className="mt-4 text-sm sm:text-base md:text-lg text-white font-normal">
              FAÇA O SEU AGENDAMENTO ONLINE!!
            </h3>
          </div>
        </section>
      </main>
    </>
  );
}

export default SectionUser;
