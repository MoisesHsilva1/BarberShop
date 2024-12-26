import React, { ReactNode } from "react";

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  children?: ReactNode;
};

const Form = ({ onSubmit, className = "flex flex-col p-6 sm:p-10 md:p-14 bg-black rounded-xl shadow-lg w-full max-w-sm mx-auto mt-6", children }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
