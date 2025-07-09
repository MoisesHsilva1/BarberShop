import { useNavigate } from "react-router";
import IconUser from "../../atoms/Icons/IconUser";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav className="bg-black h-24">
          <div className="flex justify-between items-center h-full px-4">
            <div onClick={() => navigate("/")}>
              <img
                src="/assents/logo.png"
                alt="logo-baberShop"
                className="h-auto w-40"
              />
            </div>
            <div className="flex gap-3 text-white text-[1rem] sm:text-[1.2rem]">
              <a className="hover:text-blue-700" onClick={() => navigate("/")}>
                HOME
              </a>
              <a
                className="hover:text-red-700"
                onClick={() => navigate("/servicos")}
              >
                SERVIÇOS
              </a>
              <a
                className="hover:text-gray-700"
                onClick={() => navigate("/contato")}
              >
                CONTATO
              </a>
              <a
                className="hover:text-gray-400"
                onClick={() => navigate("/login")}
              >
                <IconUser />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
