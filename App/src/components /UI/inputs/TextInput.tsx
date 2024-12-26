type InputProps = {
  type?: "text" | "email" | "password" | "number" | "tel";
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
};

const TextInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  disabled,
  className  = "w-full bg-transparent placeholder:text-slate-100 text-slate-700 text-sm sm:text-base border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow",
  label,
}: InputProps) => {
  return (
    <>
      {label && <label className="text-white font-medium mt-4">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={className}
      />
    </>
  );
};
export default TextInput;
