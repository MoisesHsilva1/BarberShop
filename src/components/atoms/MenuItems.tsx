import { NavLink } from "react-router";
import { ReactNode } from "react";

interface MenuItemsProps {
  to: string;
  children: ReactNode;
}

const MenuItems = ({ to, children }: MenuItemsProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-5 py-2 rounded-md font-medium uppercase text-[1rem] sm:text-[0.95rem] transition-all duration-300 ease-in-out
        ${
          isActive
            ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/20 scale-105"
            : "text-white hover:text-yellow-500 hover:bg-surface-hover "
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MenuItems;
