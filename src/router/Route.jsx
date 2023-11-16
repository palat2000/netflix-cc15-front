import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
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
import { endWatchingAction } from "../store/slice/watchPageSlice";
import { useDispatch } from "react-redux";
import LayoutStandAlone from "../layout/LayoutStandAlone";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";
import RedirectIfNotChooseProfile from "../features/auth/RedirectIfNotChooseProfile";
import RedirectIfNotSubscribe from "../features/auth/RedirectIfNotSubscribe";
import MoviesPage from "../pages/MoviesPage";
import MyListPage from "../pages/MyListPage";
import KidsPage from "../pages/KidsPage";

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
        <RedirectIfNotSubscribe>
          <RedirectIfNotChooseProfile>
            <LayoutBrowse />
          </RedirectIfNotChooseProfile>
        </RedirectIfNotSubscribe>
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
        path: "tv-shows",
        element: <TVShowsPage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "my-list",
        element: <MyListPage />,
      },
      {
        path: "kids",
        element: <KidsPage />,
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
        <RedirectIfNotSubscribe>
          <LayoutStandAlone />
        </RedirectIfNotSubscribe>
      </Authenticated>
    ),
    children: [
      {
        path: "watch/:videoId",
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
      {
        path: "your-account",
        element: <YourAccount />,
      },
    ],
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
