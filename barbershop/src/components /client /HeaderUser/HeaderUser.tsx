import './_HeaderUser.css'

function HeaderUser() {
  return (
    <>
      <header >
        <nav>
          <div className="header-User">
            <img src="/src/assents/logo.png" alt="logo-baberShop" />

           <div className="nav-pages-barberShop">
            <h2 className="nav-Home" >HOME</h2>
            <h2 className="nav-Services">SERVIÇOS</h2>
            <h2 className="nav-Contact">CONTATO</h2>
           </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default HeaderUser;
