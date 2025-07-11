import Contact from "../../templates/user/Contact";
import Header from "../../organisms/Header/HeaderUser";

function ContactPage() {
  return (
    <>
      <div className="bg-[url('/assents/background-services.webP')] min-h-screen bg-cover">
        <Header/>
        <Contact/>
      </div>
    </>
  );
}
export default ContactPage;
