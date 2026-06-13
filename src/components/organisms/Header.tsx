import { useNavigate } from "react-router";
import Logo from "../molecules/Logo";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <header>
        <nav className="bg-[#0A0A0A] h-24 border-b border-[#374151]">
          <div className="flex justify-between items-center h-full px-4 max-w-7xl mx-auto">
            <Logo
              firstName="Nasck"
              lastName="Hair"
            />
            <div className="flex gap-6 text-white text-[1rem] sm:text-[1.1rem] font-medium">
              <button
                className="hover:text-yellow-500 cursor-pointer transition-colors"
                onClick={() => handleNavigate("/")}
              >
                HOME
              </button>
              <button
                className="hover:text-yellow-500 cursor-pointer transition-colors"
                onClick={() => handleNavigate("/servicos")}
              >
                SERVIÇOS
              </button>
              <button
                className="hover:text-yellow-500 cursor-pointer transition-colors"
                onClick={() => handleNavigate("/contato")}
              >
                CONTATO
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
