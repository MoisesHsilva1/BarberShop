import { useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <header>
        <nav className="bg-black h-24">
          <Toaster />
          <div className="flex justify-between items-center h-full px-4">
            <div onClick={() => handleNavigate("/")}>
              <img
                src="/assents/logo.png"
                alt="logo-barberShop"
                className="h-auto w-40"
              />
            </div>
            <div className="flex gap-3 text-white text-[1rem] sm:text-[1.2rem]">
              <a
                className="hover:text-blue-700"
                onClick={() => handleNavigate("/")}
              >
                HOME
              </a>
              <a
                className="hover:text-red-700"
                onClick={() => handleNavigate("/servicos")}
              >
                SERVIÇOS
              </a>
              <a
                className="hover:text-gray-700"
                onClick={() => handleNavigate("/contato")}
              >
                CONTATO
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
