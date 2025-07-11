import { useAuth } from "../../../context/FirebaseAuthContext";
import Button from "../../atoms/buttons/Button";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen font-bold text-white text-3xl sm:text-4xl md:text-5xl flex justify-center items-center text-center px-4">
        Você precisa estar logado para acessar esta página.
      </div>
    );
  }

  return (
    <main className="min-h-screen flex justify-center items-center p-4">
      <section className="w-full max-w-md sm:max-w-lg bg-black text-white p-6 sm:p-8 rounded-xl shadow-lg gap-6 flex flex-col">
        <div className="text-center">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            Bem-vindo à Nasck Hair!
          </h1>
          <p className="text-yellow-600 mt-2 text-base sm:text-lg">
            {user.displayName}
          </p>
        </div>
        <Button onClick={logout}>Sair</Button>
      </section>
    </main>
  );
};

export default Dashboard;
