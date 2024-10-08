import { Link } from "react-router-dom";
import { menu } from "../../data";

const Menu = ({ iconsOnly }) => {
  return (
    <div className={`menu ${iconsOnly ? 'flex space-x-4' : 'flex-col lg:pl-4'}`}>
      {menu.map((item) => (
        <div className={`flex ${iconsOnly ? 'flex-row' : 'flex-col mb-5'} gap-2 `} key={item.id}>
          {item.listItems.map((listItem) => (
            <Link
              to={listItem.url}
              className={`flex items-center gap-2 p-2 rounded hover:bg-soft-bg ${iconsOnly ? 'flex-col items-center' : ''}`}
              key={listItem.id}
            >
              <img src={listItem.icon} alt="" className="w-6 h-6" />
              {!iconsOnly && <span className="hidden sm:inline">{listItem.title}</span>}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
