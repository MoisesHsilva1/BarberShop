import { useNavigate } from "react-router";
import IconUser from "../../atoms/Icons/IconUser";
import { useAuth } from "../../../context/FirebaseAuthContext";
import toast, { Toaster } from "react-hot-toast";

function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleNavigate = (path: string, requireAuth: boolean = false) => {
    if (requireAuth && !user) {
      toast.error("Você deve estar logado para acessar essa aba.");
      navigate("/login");
      return;
    }
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
                onClick={() => handleNavigate("/", false)}
              >
                HOME
              </a>
              <a
                className="hover:text-red-700"
                onClick={() => handleNavigate("/servicos", true)}
              >
                SERVIÇOS
              </a>
              <a
                className="hover:text-gray-700"
                onClick={() => handleNavigate("/contato")}
              >
                CONTATO
              </a>
              <a
                className="hover:text-gray-400"
                onClick={() => handleNavigate("/informacaoesUsuario", false)}
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
