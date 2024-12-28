import SectionInformationUser from "../../components /user/InformationUser/SectionInformationUser";
import HeaderUser from "../../components /user/HeaderUser/HeaderUser";

function InformationUser() {
  return (
    <>
      <div className="bg-[url('./src/assents/background-services.webP')] min-h-screen bg-cover">
        <HeaderUser />
        <SectionInformationUser />
      </div>
    </>
  );
}
export default InformationUser;
