import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500 dark:text-yellow-400 h-3 w-3" />
      ) : (
        <FaMoon className="text-gray-700 dark:text-gray-300 h-3 w-3" />
      )}
    </button>
  );
};

export default ToggleTheme;
