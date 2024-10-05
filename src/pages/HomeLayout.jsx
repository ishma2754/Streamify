// import { Navbar, Menu, Footer } from "../components";
// import { Outlet } from "react-router-dom";

// const HomeLayout = () => {
//   return (
//     <div className="main">
//       <Navbar />
//       <div className="container">
//         <div className="menuContainer">
//           <Menu />
//         </div>
//         <div className="contentContainer">
//           <Outlet />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HomeLayout;

import { Navbar, Menu, Footer } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-main-bg text-main-color">
      <Navbar />
      <div className="flex flex-grow overflow-hidden"> 
        <div className="w-64 p-5 border-r-2 border-soft-bg">
          <Menu />
        </div>
        <div className="flex-grow p-5"> 
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
