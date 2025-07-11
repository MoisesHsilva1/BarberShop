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
  name?: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SelectInput({
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
  name,
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
        name={name}
        checked={checked}
      />
      {children}
    </>
  );
}
export default SelectInput;
