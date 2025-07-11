import ConfirmationAppointment from "../../templates/user/ConfirmAppointment";
import Header from "../../organisms/Header/HeaderUser";

function ConfirmationAppointmentPage() {
  return (
    <>
      <div className="bg-[url('/assents/barbershop-backgound.webp')] bg-no-repeat min-h-screen bg-cover overflow-hidden">
        <Header />
        <ConfirmationAppointment />
      </div>
    </>
  );
}
export default ConfirmationAppointmentPage;
