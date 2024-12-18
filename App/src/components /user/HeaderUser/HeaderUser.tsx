function HeaderUser() {
  return (
    <>
      <header>
        <nav className="bg-black h-24">
          <div className="flex justify-between items-center h-full px-4">
            <div>
              <img
                src="/src/assents/logo.png"
                alt="logo-baberShop"
                className="h-auto w-40"
              />
            </div>
            <div className="flex gap-3 text-white text-[1rem] sm:text-[1.2rem]">
              <a className="hover:text-blue-700" href="/Home">HOME</a>
              <a className="hover:text-red-700" href="/Services">SERVIÇOS</a>
              <h2 className="hover:text-gray-700">CONTATO</h2>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HeaderUser;
