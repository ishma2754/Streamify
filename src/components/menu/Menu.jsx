


import { Link } from "react-router-dom";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="flex flex-col gap-2 mb-5" key={item.id}>
          <span className="text-xs font-light text-soft-color uppercase">
            {item.title}
          </span>
          {item.listItems.map((listItem) => (
            <Link 
              to="/" 
              className="flex items-center gap-2 p-2 rounded hover:bg-soft-bg" 
              key={listItem.id}
            >
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
