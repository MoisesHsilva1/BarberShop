import SectionContactUser from "../../components /user/ContactUser/SectionContactUser";
import HeaderUser from "../../components /user/HeaderUser/HeaderUser";

function ContactUser() {
  return (
    <>
      <div className="bg-[url('/assents/background-services.webP')] min-h-screen bg-cover">
        <HeaderUser />
        <SectionContactUser />
      </div>
    </>
  );
}
export default ContactUser;
