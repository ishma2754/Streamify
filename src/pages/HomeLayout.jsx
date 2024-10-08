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
    return <ErrorPage/>; 
  }
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
