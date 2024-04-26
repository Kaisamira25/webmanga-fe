import React, { lazy } from "react";
const DetailsProductPage = lazy(() => import("../pages/DetailsProduct/DetailsProductPage"))
const NewPassword = lazy(() =>import("../pages/ResetPassword/NewPasswordPage"));
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const PaymentPage = lazy(() => import("../pages/Payment/PaymentPage"));
const UserPage = lazy(() => import("../pages/User/UserPage"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage"));
const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const RegisterPage = lazy(() => import("../pages/Register/RegisterPage"));
const OtpPage = lazy(() => import("../pages/Otp/OtpPage")); // Đúng path rồi
const OtpResetPassword = lazy(() => import("../pages/Otp/OtpResetPasswordPage"));
const CartPage = lazy(() => import("../pages/Cart/CartPage"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPassword/ResetPasswordPage"));
const LoginAdminPage = lazy(() => import("../apps/Authentication/Login/LoginAdmin"));
const AboutPage = lazy(() => import("../pages/About/AboutPage"));
const Admin = lazy(() => import("../pages/Admin/AdminPage"));
const HomeAdmin = lazy(() => import("../pages/Admin/AdminPage"));
const routes = [
  // userPage
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/detail/:id", element: <DetailsProductPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/cart/payment", element: <PaymentPage /> },
  { path: "/user", element: <UserPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/otp", element: <OtpPage /> },
  { path: "/otp/resetpassword", element: <OtpResetPassword /> },
  { path: "/resetpassword", element: <ResetPasswordPage /> },
  { path: "/newpassword", element: <NewPassword /> },
  { path: "/aboutus", element: <AboutPage /> },

  // adminPage
  { path: "/authentication/login/admin/account", element: <LoginAdminPage /> },
  { path: "/admin", element: <Admin />, adminRequired: true },
  { path: "/admin/genres", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/covers", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/gifts", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/discounts", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/publications", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/statis", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/employees", element: <HomeAdmin/>, adminRequired: true},
  { path: "/admin/types", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/account", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/order", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/stock", element: <HomeAdmin />, adminRequired: true },
  { path: "/admin/sales", element: <HomeAdmin />, adminRequired: true },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
