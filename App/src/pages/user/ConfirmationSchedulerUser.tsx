import SectionConfirmationScheduler from "../../components /user/ConfirmationSchedulerUser/SectionConfirmationScheduler";
import HeaderUser from "../../components /user/HeaderUser/HeaderUser";

function ConfirmationSchedulerUser() {
  return (
    <>
      <div className="bg-[url('./src/assents/barbershop-backgound.webp')] bg-no-repeat min-h-screen bg-cover overflow-hidden">
        <HeaderUser />
        <SectionConfirmationScheduler />
      </div>
    </>
  );
}
export default ConfirmationSchedulerUser;
