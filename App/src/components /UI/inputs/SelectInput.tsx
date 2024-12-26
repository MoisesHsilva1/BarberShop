import { ReactNode } from "react";

type SelectInputProps = {
  type?: "checkbox" | "radio";
  label?: string;
  value?: string;
  required?: boolean;
  className?: string;
  id?: string;
  disabled?: boolean;
  children?: ReactNode;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function selectInput({
  type,
  value,
  label,
  required,
  className = "",
  disabled,
  children,
  id,
  onChange,
  checked,
}: SelectInputProps) {
  return (
    <>
      {label && <label className="text-white font-medium mt-4">{label}</label>}
      <input
        type={type}
        value={value}
        id={id}
        required={required}
        className={className}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      {children}
    </>
  );
}
export default selectInput;
