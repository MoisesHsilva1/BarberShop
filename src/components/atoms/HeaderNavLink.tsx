import { NavLink } from "react-router";
import { ReactNode } from "react";

interface HeaderNavLinkProps {
  to: string;
  children: ReactNode;
}

const HeaderNavLink = ({ to, children }: HeaderNavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-5 py-2 rounded-md font-medium transition-all duration-300 ease-in-out uppercase text-[1rem] sm:text-[1.1rem]
        ${
          isActive
            ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/20 scale-105"
            : "text-white hover:text-yellow-500 hover:bg-surface-hover hover:scale-105"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default HeaderNavLink;
