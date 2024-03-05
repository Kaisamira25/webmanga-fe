import React, { lazy } from "react";
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
  { path: "/Cart", element: <CartPage /> },
  { path: "/Cart/Payment", element: <PaymentPage /> },
  { path: "/UserPage", element: <UserPage /> },
  { path: "/LoginPage", element: <LoginPage /> },
  { path: "/RegisterPage", element: <RegisterPage /> },
  { path: "/OtpPage", element: <OtpPage /> },
  { path: "/ForgotPasswordPage", element: <ForgotPasswordPage /> },
  { path: "*", element: <ErrorPage /> },
];
export default routes;
