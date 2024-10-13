import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full p-5 flex items-center justify-between flex-wrap">
      <div className="flex items-center font-bold gap-2">
        <Link to="/">
          <span>Streamify</span>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <Link to="/settings">
            <img src="/notifications.svg" alt="Notifications" />
          </Link>
          <span className="absolute bg-red-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs top-[-10px] right-[-10px]">
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
