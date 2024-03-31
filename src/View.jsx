import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import routes from "./routers/Router";
import Header from "./components/header/Header";
import { Suspense } from "react";

function Views() {
  const location = useLocation();

  const shouldDisplayHeaderFooter = ![
    "/login",
    "/register",
    "/otp",
    "/otpForgotPasswordPage",
    "/forgotPassword",
    "/forgotPasswordConfirm",
    "/Admin",
    "/Admin/Genre",
    "/Admin/Cover",
    "/Admin/Discount",
    "/Admin/Gift",
    "/Admin/Product",
    "/Admin/Type",
    "/Admin/Account",
    "/Admin/Order",
    "/Admin/Stock",
    "/Admin/Sales",
  ].includes(location.pathname);
  return (
    <div>
      {shouldDisplayHeaderFooter && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
      {shouldDisplayHeaderFooter && <Footer />}
    </div>
  );
}

export default Views;
