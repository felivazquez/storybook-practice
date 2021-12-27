const Input = ({ type, label, name, placeholder }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm mb-1.5 font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="border border-gray-light rounded-[3px] h-11 w-full py-2.5 px-3.5 text-gray-700"
      />
    </>
  );
};

export default Input;
