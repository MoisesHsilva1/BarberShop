import Header from "../../organisms/Header/HeaderUser";
import Login from "../../templates/account/Login";

function LoginPage() {
  return (
    <>
      <div className="bg-[url('/assents/background-services.webP')] min-h-screen bg-cover">
        <Header />
        <Login />
      </div>
    </>
  );
}
export default LoginPage;
