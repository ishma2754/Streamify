const ToggleSwitch = ({ label, isOn, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="dark:text-gray-300 text-gray-900">{label}</span>
      <button
        className={`
        relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none
        ${
          isOn
            ? "dark:bg-indigo-600 bg-indigo-400"
            : "dark:bg-gray-600 bg-gray-500"
        }
        `}
        onClick={onToggle}
      >
        <span
          className={`inline-block size-4 transform transition-transform dark:bg-white bg-gray-900 rounded-full 
            ${isOn ? "translate-x-6" : "translate-x-1"}
            `}
        />
      </button>
    </div>
  );
};
export default ToggleSwitch;
