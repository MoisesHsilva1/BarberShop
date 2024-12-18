import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  clasName?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ type, clasName = "w-full text-white font-semi-bold text-xl sm:text-2xl py-3 px-6 hover:bg-yellow-300 bg-yellow-500 rounded-md transition duration-300", children, ...props }: ButtonProps) => {
  return (
    <>
      <button className={clasName} type={type} {...props}>
        {children}
      </button>
    </>
  );
};
export default Button;
