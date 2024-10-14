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
    <div className="flex flex-col min-h-screen bg-neutral-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-80 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="absolute inset-0" />
      </div>

      <div className="z-10">
        <Navbar />
        {/* Mobile Menu with Icons Only */}
        <div className="lg:hidden flex items-center justify-center">
          <Menu iconsOnly={true} />
        </div>
        <div className="flex flex-grow">
          <div className="w-40 border-r-2 mt-7 dark:border-soft-bg border-gray-100 hidden lg:flex">
            <Menu />
          </div>
          <div className="p-5 flex-grow overflow-x-auto">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
