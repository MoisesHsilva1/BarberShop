interface InputProps {
  label?: string;
  typeInput?: "text" | "email" | "password" | "number" | "tel";
  value?: string;
  placeholder?: string;
  className?: string;
  pattern?: string;
  htmlFor?: string;
  id?: string;
  name?: string;
  onClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  typeInput,
  id,
  htmlFor,
  value,
  placeholder,
  onChange,
  onClick,
  pattern,
  onKeyDown,
  name,
  className = "",
}: InputProps) => {
  return (
    <>
      <label className="text-white font-medium mt-4" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        name={name}
        onClick={onClick}
        id={id}
        onKeyDown={onKeyDown}
        className={`${className} w-full bg-transparent placeholder:text-white text-white text-sm sm:text-base border border-slate-200 rounded-md px-3 py-2 pr-10 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
        type={typeInput}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
      />
    </>
  );
};
export default Input;
