import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserBrowsePage from "../pages/UserBrowsePage";
import WatchPage from "../pages/WatchPage";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";
import GuestBrowsePage from "../pages/GuestBrowsePage";
import PackagePage from "../pages/PackagePage";
import SuccessPage from "../pages/SuccessPage";
import SignUpPage from "../pages/SignUpPage";
import SearchPage from "../pages/SearchPage";
import ManageProfiles from "../pages/ManageProfilesPage";
import TVShowsPage from "../pages/TVShowsPage";

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
        path: "browse/genres/:genres",
        element: <TVShowsPage />,
      },

      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
      {
        path: "title/:movieId",
        element: <GuestBrowsePage />,
      },
      {
        path: "package",
        element: <PackagePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "watch/:movieId",
    element: <WatchPage />,
  },
  {
    path: "manage-profile",
    element: <ManageProfiles />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
