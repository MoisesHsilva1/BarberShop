function SectionContactUser() {
  return (
    <>
      <main>
        <section className="fixed bottom-0 left-0 w-full bg-black h-[60%] sm:h-[50%] shadow-lg">
          <div className="flex justify-center -mt-10 h-20">
            <div className="bg-yellow-500 w-auto max-w-[320px] px-6 py-4 rounded-lg shadow-xl">
              <h1 className="text-2xl text-black font-light text-center">
                CONTATO
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-lg text-white font-light text-center px-6 sm:px-12">
              Fale diretamente com o barbeiro!
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-lg font-semibold text-white hover:text-yellow-500 font-light text-center px-6 sm:px-12">
              <a href="https://wa.me/5511941771789" target="_blank">
                <i className="fab fa-whatsapp mr-1"></i> WHATSAPP
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
export default SectionContactUser;
