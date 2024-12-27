import SectionSchedulingUser from "../../components /user/SchedulingUser/SectionScheduling";
import HeaderUser from "../../components /user/HeaderUser/HeaderUser";

function SchedulingUser() {
  return (
    <>
      <div className="bg-[url('./src/assents/background-services.webP')] min-h-screen bg-cover">
        <HeaderUser />
        <SectionSchedulingUser />
      </div>
    </>
  );
}
export default SchedulingUser;
