import { Scissors } from "lucide-react";
import { Link } from "react-router";

interface LogoProps {
  className?: string;
  iconSize?: number;
  firstName?: string;
  lastName?: string;
}

const Logo = ({ className, iconSize = 32, firstName, lastName }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 cursor-pointer group hover:no-underline outline-none ${className}`}
      aria-label={` ${firstName} ${lastName} `}
    >
      <Scissors
        size={iconSize}
        className="text-[#F59E0B] transition-transform group-hover:rotate-12"
        aria-hidden="true"
      />
      <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">
        {firstName}
        <span className="text-[#F59E0B]">{lastName}</span>
      </span>
    </Link>
  );
};

export default Logo;
