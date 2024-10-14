import { Link } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import { ToggleTheme } from "../../components/index";
const Navbar = () => {
  return (
    <div className="w-full p-5 flex items-center justify-between flex-wrap border-b-2  border-gray-200 dark:border-none">
      <div className="flex items-center font-bold gap-2">
        <Link to="/">
          <button className="px-5 py-3 rounded-md bg-blue-500 text-white font-bold">
            Streamify
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <ToggleTheme />
        <div className="relative group">
          <Link to="/settings">
            <FiBell className="h-9 w-9 p-2 dark:text-gray-200 text-gray-900 transition-shadow duration-300 ease-in-out group-hover:bg-gray-200 group-active:bg-gray-200 dark:hover:bg-gray-700 rounded-full" />
          </Link>
          <span className="absolute bg-red-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs top-[-5px] right-[-1px]">
            1
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/settings">
            <img
              src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt="User"
              className="w-6 h-6 rounded-full object-cover"
            />
          </Link>
          <span className="hidden sm:inline">Jessi</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
