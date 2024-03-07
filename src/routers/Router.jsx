import React, { lazy } from "react";
import DetailsProductPage from "../pages/DetailsProduct/DetailsProductPage";
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const PaymentPage = lazy(() => import("../pages/Payment/PaymentPage"));
const UserPage = lazy(() => import("../pages/User/UserPage"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage"));
const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const RegisterPage = lazy(() => import("../pages/Register/RegisterPage"));
const OtpPage = lazy(() => import("../pages/OTP/OTPPage"));
const CartPage = lazy(() => import("../pages/Cart/CartPage"));

const ForgotPasswordPage = lazy(() =>
  import("../pages/ForgotPassword/ForgotPasswordPage")
);

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/Detail", element: <DetailsProductPage /> },
  { path: "/Cart", element: <CartPage /> },
  { path: "/Cart/Payment", element: <PaymentPage /> },
  { path: "/User", element: <UserPage /> },
  { path: "/Login", element: <LoginPage /> },
  { path: "/Register", element: <RegisterPage /> },
  { path: "/Otp", element: <OtpPage /> },
  { path: "/ForgotPassword", element: <ForgotPasswordPage /> },
  { path: "*", element: <ErrorPage /> },
];
export default routes;
