import Header from "../../organisms/Header/HeaderUser";
import Home from "../../templates/user/Home";

function HomePage() {
  return (
    <>
      <div className="bg-[url('/assents/barbershop-backgound.webp')] bg-no-repeat min-h-screen bg-cover">
        <Header />
        <Home />
      </div>
    </>
  );
}
export default HomePage;
