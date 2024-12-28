import HeaderUser from "../../components /user/HeaderUser/HeaderUser";
import SectionHomeUser from "../../components /user/SectionHomeUser/SectionHomeUser";

function HomeUser() {
  return (
    <>
      <div className="bg-[url('./src/assents/barbershop-backgound.webp')] bg-no-repeat min-h-screen bg-cover">
        <HeaderUser />
        <SectionHomeUser />
      </div>
    </>
  );
}
export default HomeUser;
