const Input = ({ type, label, name }) => {
  return (
    <>
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="border-2 border-indigo-600 bg-stone-300"
      />
    </>
  );
};

export default Input;
