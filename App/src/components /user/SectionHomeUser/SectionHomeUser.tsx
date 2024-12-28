import { useEffect } from "react";

function SectionHomeUser() {
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
          <header className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl text-center font-sans">
            <h1 className="font-semibold">NASCK HAIR</h1>
            <h2 className="text-2xl font-light sm:text-3xl md:text-4xl">
              UM NOVO CONCEITO SOBRE BARBEARIA
            </h2>
          </header>
          <div className="mt-14 text-center">
            <a
              className="bg-yellow-500 hover:text-white border border-transparent rounded-2xl py-3 px-10 w-full sm:px-6 sm:py-3 text-sm sm:text-lg md:text-xl font-light"
              href="/Services"
            >
              AGENDAMENTO
            </a>
            <h3 className="mt-4 text-sm sm:text-base md:text-lg text-white font-normal">
              FAÇA O SEU AGENDAMENTO ONLINE!!
            </h3>
          </div>
        </section>
      </main>
    </>
  );
}

export default SectionHomeUser;
