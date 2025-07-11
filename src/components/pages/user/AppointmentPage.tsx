import Header from "../../organisms/Header/HeaderUser";
import Appointment from "../../templates/user/Appointment";

function AppointmentPage() {
  return (
    <>
      <div className="bg-[url('/assents/background-services.webP')] min-h-screen bg-cover">
        <Header />
        <Appointment />
      </div>
    </>
  );
}
export default AppointmentPage;
