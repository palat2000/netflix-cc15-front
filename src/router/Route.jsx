import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserBrowsePage from "../pages/UserBrowsePage";
import WatchPage from "../pages/WatchPage";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import GuestBrowsePage from "../pages/GuestBrowsePage";
import PackagePage from "../pages/PackagePage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "browse",
        element: <UserBrowsePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "title/:movieId",
        element: <GuestBrowsePage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "package",
        element: <PackagePage />,
      },
    ],
  },
  {
    path: "watch/:movieId",
    element: <WatchPage />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
