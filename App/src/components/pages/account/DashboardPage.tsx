import Header from "../../organisms/Header/HeaderUser";
import Dashboard from "../../templates/account/Dashboard";

function DashboardPage() {
  return (
    <>
      <div className="bg-[url('/assents/background-services.webP')] min-h-screen bg-cover">
        <Header />
        <Dashboard />
      </div>
    </>
  );
}
export default DashboardPage;
