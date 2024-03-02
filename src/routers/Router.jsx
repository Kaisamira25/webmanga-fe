import React, { lazy } from "react";
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const PaymentPage = lazy(() => import("../pages/Payment/PaymentPage"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage"));

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/Cart/Payment", element: <PaymentPage /> },
  { path: "*", element: <ErrorPage /> },
];
export default routes;
