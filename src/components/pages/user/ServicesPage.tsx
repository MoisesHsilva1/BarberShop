import Header from "../../organisms/Header/HeaderUser";
import Services from "../../templates/user/Services";

function ServicesPage() {
  return (
    <>
      <div className="bg-[url('/assents/background-services.webP')] min-h-screen bg-cover">
        <Header/>
        <Services />
      </div>
    </>
  );
}
export default ServicesPage;
