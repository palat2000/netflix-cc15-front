import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage";
import WatchPage from "../pages/WatchPage";
import Layout from "../layout/Layout";
import RegisterPage from "../pages/RegisterPage";

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
        element: <BrowsePage />,
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
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
