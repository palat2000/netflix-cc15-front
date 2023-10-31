import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserBrowsePage from "../pages/UserBrowsePage";
import WatchPage from "../pages/WatchPage";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PlanPage from "../pages/PlanPage";
import GoToPaymentResult from "../pages/GoToPaymentResult";
import RegisterFormPage from "../pages/RegisterFormPage";
import GuestBrowsePage from "../pages/GuestBrowsePage";

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
        path: "signup",
        element: <RegisterPage />,
        children: [
          {
            path: "",
            element: <RegisterFormPage />,
          },
          {
            path: "plan",
            element: <PlanPage />,
          },
        ],
      },
      {
        path: "title/:movieId",
        element: <GuestBrowsePage />,
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
