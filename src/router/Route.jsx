import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage";
import WatchPage from "../pages/WatchPage";
import Layout from "../layout/Layout";

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
    ],
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
