import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Menu, Footer, Loader } from "../components";
import { Outlet } from "react-router-dom";
import { fetchStreamifyData } from "../features/streamifySlice";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.streamify);

  useEffect(() => {
    dispatch(fetchStreamifyData());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-main-bg text-main-color">
      <Navbar />
      {/* Mobile Menu with Icons Only */}
      <div className="lg:hidden flex items-center justify-center">
        <Menu iconsOnly={true} />
      </div>
      <div className="flex flex-grow">
        <div className="w-40 border-r-2 mt-7 border-soft-bg hidden lg:flex">
          <Menu />
        </div>
        <div className="p-5 flex-grow overflow-x-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
