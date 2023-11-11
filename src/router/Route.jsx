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
import LayoutStandAlone from "../layout/LayoutStandAlone";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";
import RedirectIfNotChooseProfile from "../features/auth/RedirectIfNotChooseProfile";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <RedirectIfAuthenticated>
        <HomePage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      {
        path: "success",
        element: <SuccessPage />,
      },
      {
        path: "package",
        element: <PackagePage />,
      },
    ],
  },
  {
    path: "",
    element: (
      <Authenticated>
        <RedirectIfNotChooseProfile>
          <LayoutBrowse />
        </RedirectIfNotChooseProfile>
      </Authenticated>
    ),
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
        path: "browse/genres/:genres",
        element: <TVShowsPage />,
      },
    ],
  },
  {
    path: "",
    element: (
      <RedirectIfAuthenticated>
        <LayoutStandAlone />
      </RedirectIfAuthenticated>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "title/:movieId",
        element: <GuestBrowsePage />,
      },
    ],
  },
  {
    path: "",
    element: (
      <Authenticated>
        <LayoutStandAlone />
      </Authenticated>
    ),
    children: [
      {
        path: "watch/:movieId",
        element: (
          <RedirectIfNotChooseProfile>
            <WatchPage />
          </RedirectIfNotChooseProfile>
        ),
      },
      {
        path: "manage-profile",
        element: <ManageProfiles />,
      },
      {
        path: "choose-profile",
        element: <WhoIsWatching />,
      },
    ],
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
