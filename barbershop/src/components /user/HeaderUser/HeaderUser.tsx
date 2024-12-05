function HeaderUser() {
  return (
    <>
      <header>
        <nav>
          <div className="flex justify-between bg-black h-24">
            <div className="px-4">
              <img
                src="/src/assents/logo.png"
                alt="logo-baberShop"
                className="max-w-40 h-auto w-full"
              />
            </div>
            <div className="flex font-sans text-white text-[1rem] sm:text-[1.2rem] gap-3 mt-12 px-4 ">
              <h2 className="hover:text-red-700">HOME</h2>
              <h2 className="hover:text-blue-700">SERVIÇOS</h2>
              <h2 className="hover:text-gray-700">CONTATO</h2>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default HeaderUser;
