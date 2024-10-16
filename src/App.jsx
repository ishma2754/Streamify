import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loader } from "./components/index";

const HomeLayout = lazy(() => import("./pages/HomeLayout"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Artists = lazy(() => import("./pages/artists/Artists"));
const Home = lazy(() => import("./pages/home/Home"));
const SingleArtist = lazy(() => import("./pages/singleArtist/SingleArtist"));
const Users = lazy(() => import("./pages/users/Users"))
const Settings = lazy(() => import("./pages/settings/Settings"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <HomeLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "artists",
        element: (
          <Suspense fallback={<Loader />}>
            <Artists />
          </Suspense>
        ),
      },
      {
        path: "artists/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <SingleArtist />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<Loader/>}>
            <Users/>
          </Suspense>
        )
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<Loader/>}>
            <Settings/>
          </Suspense>
        )
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
