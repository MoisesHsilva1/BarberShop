import Header from "../../organisms/Header/HeaderUser";
import Register from "../../templates/account/Resgister";

function RegisterPage() {
  return (
    <>
      <div className="bg-[url('/assents/background-services.webP')] min-h-screen bg-cover">
        <Header />
        <Register />
      </div>
    </>
  );
}
export default RegisterPage;
