import React, { lazy } from "react";
import DetailsProductPage from "../pages/DetailsProduct/DetailsProductPage";
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const PaymentPage = lazy(() => import("../pages/Payment/PaymentPage"));
const UserPage = lazy(() => import("../pages/User/UserPage"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage"));

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/Detail", element: <DetailsProductPage /> },
  { path: "/Cart/Payment", element: <PaymentPage /> },
  { path: "/UserPage", element: <UserPage /> },
  { path: "*", element: <ErrorPage /> },
];
export default routes;
