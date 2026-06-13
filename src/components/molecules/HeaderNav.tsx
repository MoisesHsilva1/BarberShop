import HeaderNavLink from "../atoms/HeaderNavLink";
import { NavigationItem } from "../../config/enum/navigation";

interface HeaderNavProps {
  routes: readonly NavigationItem[];
}

export const HeaderNav = ({ routes }: HeaderNavProps) => {
  return (
    <div className="flex gap-6 items-center">
      {routes.map((route) => (
        <HeaderNavLink key={route.href} to={route.href}>
          {route.label}
        </HeaderNavLink>
      ))}
    </div>
  );
};
