import { useNavigate } from "react-router";
import { Button } from "@heroui/react";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <main className="overflow-hidden">
        <section className="flex flex-col  items-center justify-center min-h-screen px-4">
          <div className="bg-black bg-opacity-75 p-14 rounded-3xl shadow-lg">
            <div className="flex flex-col items-center text-center space-y-2 max-w-4xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-text-primary tracking-tighter ">
                NASCK <span className="text-yellow-500">HAIR</span>
              </h1>
              <div className="w-20 h-1.5 bg-yellow-500 rounded-full my-2"></div>
              <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-light text-text-secondary">
                UM NOVO CONCEITO SOBRE BARBEARIA
              </h2>
            </div>

            <div className="mt-16 text-center flex flex-col items-center gap-8">
              <Button
                onPress={() => handleNavigate("/servicos")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black  text-md md:text-md py-8 px-12 rounded-2xl transition-all duration-200 active:scale-95 shadow-xl "
              >
                AGENDAMENTO
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
