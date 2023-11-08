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
import Authenticate from "../features/auth/register/Authenticate";
import RedirectIfAuthenticated from "../features/auth/register/RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Authenticate>
        <Layout />
      </Authenticate>
    ),
    children: [
      {
        path: "browse",
        element: <UserBrowsePage />,
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
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "auth",
    element: (
      <RedirectIfAuthenticated>
        <Layout />
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
        path: "package",
        element: <PackagePage />,
      },
    ],
  },
  {
    path: "home",
    element: <HomePage />,
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
