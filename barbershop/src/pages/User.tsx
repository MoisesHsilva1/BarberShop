import HeaderUser from "../components /user/HeaderUser/HeaderUser";
import SectionUser from "../components /user/SectionUser/SectionUser";

function User() {
  return (
    <>
      <div className="bg-[url('./src/assents/barbershop-backgound.webp')] bg-no-repeat min-h-screen bg-cover">
        <HeaderUser />
        <SectionUser />
      </div>
    </>
  );
}
export default User;
