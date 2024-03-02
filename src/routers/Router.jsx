// import React from "react";
// import PaymentPage from "../pages/Payment/PaymentPage";
// import HomePage from "../pages/Home/HomePage";
// import ErrorPage from "../pages/Error/ErrorPage";

// const routes = [
//   { path: "/", element: <HomePage /> },
//   { path: "/Cart/Payment", element: <PaymentPage /> },
//   { path: "*", element: <ErrorPage /> },
// ];
import React, { lazy } from "react";
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const PaymentPage = lazy(() => import("../pages/Payment/PaymentPage"));
const UserPage = lazy(() => import("../pages/User/UserPage"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage"));

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/Cart/Payment", element: <PaymentPage /> },
  { path: "/UserPage", element: <UserPage /> },
  { path: "*", element: <ErrorPage /> },
  
];
export default routes;
