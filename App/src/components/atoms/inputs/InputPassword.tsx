import { useState } from "react";
import IconEyeOpen from "../Icons/IconEyeOpen";
import IconEyeClose from "../Icons/IconEyeClose";

type InputPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
  htmlFor?: string;
  label?: string;
};

const InputPassword = ({
  value,
  onChange,
  placeholder = "Digite sua senha",
  name,
  id,
  className = "",
  label,
  htmlFor,
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-4">
      {label && (
        <label
          htmlFor={htmlFor || id}
          className="block text-white font-medium mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          id={id}
          className={`${className} w-full bg-transparent placeholder:text-slate-100 text-white text-sm sm:text-base border border-slate-200 rounded-md px-3 py-2 pr-10 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-3 transfor -translate-y-1/2 text-white"
          tabIndex={-1}
        >
          {showPassword ? <IconEyeClose /> : <IconEyeOpen />}
        </button>
      </div>
    </div>
  );
};

export default InputPassword;
