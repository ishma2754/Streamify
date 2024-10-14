import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { MdDashboard, MdSettings } from "react-icons/md";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: <FiHome className="w-6 h-6" />,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Artists",
        url: "/artists",
        icon: <FaUser className="w-6 h-6" />,
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: <MdDashboard className="w-6 h-6" />,
      },
      {
        id: 2,
        title: "Settings",
        url: "/settings",
        icon: <MdSettings className="w-6 h-6" />,
      },
    ],
  },
];

const Menu = ({ iconsOnly }) => {
  return (
    <div className={`menu ${iconsOnly ? "flex space-x-4" : "flex-col lg:pl-4"}`}>
      {menu.map((item) => (
        <div
          className={`flex ${iconsOnly ? "flex-row" : "flex-col mb-5"} gap-2 `}
          key={item.id}
        >
          {item.listItems.map((listItem) => (
            <NavLink
              to={listItem.url}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded dark:hover:bg-soft-bg hover:bg-gray-300 ${
                  isActive ? "bg-blue-400 text-white" : ""
                } ${iconsOnly ? "flex-col items-center" : ""}`
              }
              key={listItem.id}
            >
              {listItem.icon}
              {!iconsOnly && (
                <span className="hidden sm:inline">{listItem.title}</span>
              )}
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
