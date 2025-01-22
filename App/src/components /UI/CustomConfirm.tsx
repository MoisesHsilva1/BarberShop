interface CustomConfirmProps {
  onConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  text?: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

const CustomConfirm = ({
  onConfirm,
  onCancel,
  title,
  text,
  confirmLabel,
  cancelLabel,
}: CustomConfirmProps) => {
  return (
    <div className="flex justify-center items-center bg-gray-100 rounded-lg h-auto w-4/5 sm:w-2/4 md:w-1/3 lg:w-1/4 absolute flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
      <p className="text-lg mb-6 text-center">{text}</p>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          onClick={onConfirm}
        >
          {confirmLabel}
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          onClick={onCancel}
        >
          {cancelLabel}
        </button>
      </div>
    </div>
  );
};

export default CustomConfirm;
