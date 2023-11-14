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
import YourAccount from "../pages/YourAccountPage";
import WhoIsWatching from "../pages/WhoIsWatching";
import TVShowsPage from "../pages/TVShowsPage";
import LoadingPage from "../pages/LoadingPage";
import LayoutBrowse from "../layout/LayoutBrowse";

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
    ],
  },
  {
    path: "",
    element: <LayoutBrowse />,
    children: [
      {
        path: "browse",
        element: <UserBrowsePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "browse/tvShows",
        element: <TVShowsPage />,
      },
      // {
      //   path: "browse/movies",
      //   element: <MoviesPage />,
      // },
      // {
      //   path: "browse/MyList",
      //   element: <MyListPage />,
      // },
    ],
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
    path: "watch/:movieId",
    element: <WatchPage />,
  },
  {
    path: "manage-profile",
    element: <ManageProfiles />,
  },
  {
    path: "choose-profile",
    element: <WhoIsWatching />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
