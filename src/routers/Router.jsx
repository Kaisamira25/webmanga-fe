import React, { lazy } from "react";
import DetailsProductPage from "../pages/DetailsProduct/DetailsProductPage";
const NewPassword = lazy(() =>
  import("../pages/ResetPassword/NewPasswordPage")
);
const AdminGenre = lazy(() => import("../apps/Admin/page/Genre"));
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const PaymentPage = lazy(() => import("../pages/Payment/PaymentPage"));
const UserPage = lazy(() => import("../pages/User/UserPage"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage"));
const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const RegisterPage = lazy(() => import("../pages/Register/RegisterPage"));
const OtpPage = lazy(() => import("../pages/OTP/OTPPage")); // Đúng path rồi
const OtpResetPassword = lazy(() =>
  import("../pages/OTP/OtpResetPasswordPage")
);
const CartPage = lazy(() => import("../pages/Cart/CartPage"));
const HomeAdmin = lazy(() => import("../pages/Admin/AdminPage"));
const ResetPasswordPage = lazy(() =>
  import("../pages/ResetPassword/ResetPasswordPage")
);
const LoginAdminPage = lazy(() =>
  import("../apps/Authentication/Login/LoginAdmin")
);
const AboutPage = lazy(() => import("../pages/About/AboutPage"))
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
  { path: "/aboutus", element: <AboutPage />},
  // adminPage

  { path: "/authentication/login/admin/account", element: <LoginAdminPage /> },
  { path: "/admin", element: <HomeAdmin /> },
  { path: "/admin/genre", element: <HomeAdmin /> },
  { path: "/admin/cover", element: <HomeAdmin /> },
  { path: "/admin/gift", element: <HomeAdmin /> },
  { path: "/admin/discount", element: <HomeAdmin /> },
  { path: "/admin/product", element: <HomeAdmin /> },
  { path: "/admin/statis", element: <HomeAdmin /> },
  { path: "/admin/type", element: <HomeAdmin /> },
  { path: "/admin/account", element: <HomeAdmin /> },
  { path: "/admin/order", element: <HomeAdmin /> },
  { path: "/admin/stock", element: <HomeAdmin /> },
  { path: "/admin/sales", element: <HomeAdmin /> },
  { path: "*", element: <ErrorPage /> },
];
export default routes;
