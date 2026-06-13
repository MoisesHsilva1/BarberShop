import { NavigationItemInterface } from "@/types/interface/NavigationItemInterface";
import { NAVIGATION_ROUTES } from "../../config/enum/navigation";

import Logo from "../atoms/Logo";
import MenuItems from "../atoms/MenuItems";

const Header = () => {
  return (
    <header>
      <nav className="bg-background h-24 border-b border-border">
        <div className="flex justify-between items-center h-full px-4 max-w-7xl mx-auto">
          <Logo firstName="Nasck" lastName="Hair" />
          <div className="flex gap-4 items-center">
            {NAVIGATION_ROUTES.map((route: NavigationItemInterface) => (
              <MenuItems key={route.href} to={route.href}>
                {route.label}
              </MenuItems>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
