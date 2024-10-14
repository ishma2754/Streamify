const InputField = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      className="w-full p-2 dark:bg-gray-600  border dark:border-gray-900 rounded-lg focus:outline-none focus:ring-1 dark:focus:ring-gray-700 dark:text-gray-200 font-poppins font-medium"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
