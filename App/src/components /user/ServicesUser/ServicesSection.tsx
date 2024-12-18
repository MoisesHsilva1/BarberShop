function ServicesSection() {
  return (
    <>
      <main>
        <section className="fixed bottom-0 left-0 w-full bg-black h-3/6 shadow-lg">
          <div className="flex justify-center -mt-10 h-20">
            <div className="bg-yellow-500 w-auto max-w-[320px] px-6 py-4 rounded-lg shadow-xl">
              <h1 className="text-2xl text-black font-light text-center">
                ESCOLHA O SERVIÇO
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <p className="text-lg text-white font-light text-center px-6 sm:px-12">
              SELECIONE OS SERVIÇOS DESEJADOS
            </p>
          </div>
          <div className="flex justify-center gap-6 mx-6 mt-12 flex-wrap">
            <p className="bg-white w-auto sm:w-1/3 py-4 px-6 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out text-center text-black font-medium transform hover:scale-105">
              CORTE DE CABELO
            </p>
            <p className="bg-white w-auto sm:w-1/3 py-4 px-6 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out text-center text-black font-medium transform hover:scale-105">
              BARBA
            </p>
            <p className="bg-white w-auto sm:w-1/3 py-4 px-6 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out text-center text-black font-medium transform hover:scale-105">
              SOBRANCELHA
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default ServicesSection;
