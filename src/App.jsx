import { HomeLayout, ErrorPage, Login, Artists, Home, SingleArtist } from "./pages/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "artists/:id",
        element: <SingleArtist/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
