import { HeaderNav } from "../molecules/HeaderNav";
import { NAVIGATION_ROUTES } from "../../config/enum/navigation";
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <header>
      <nav className="bg-background h-24 border-b border-border">
        <div className="flex justify-between items-center h-full px-4 max-w-7xl mx-auto">
          <Logo />
          <HeaderNav routes={NAVIGATION_ROUTES} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
