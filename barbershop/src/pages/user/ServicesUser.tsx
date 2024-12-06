import HeaderUser from "../../components /user/HeaderUser/HeaderUser";
import ServicesSection from "../../components /user/ServicesUser/ServicesSection";

function ServicesUser() {
  return (
    <>
      <div className="bg-[url('./src/assents/background-services.webP')] bg-no-repeat min-h-screen bg-cover">
        <HeaderUser />
        <ServicesSection />
      </div>
    </>
  );
}
export default ServicesUser;
