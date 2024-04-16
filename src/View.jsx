import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import routes from "./routers/Router";
import Header from "./components/header/Header";
import { Suspense } from "react";

function Views() {
  const location = useLocation();

  const shouldDisplayHeaderFooter = ![
    "/login",
    "/Login",
    "/register",
    "/otp",
    "/otp/resetpassword",
    "/newpassword",
    "/authentication/login/admin/account",
    "/resetpassword",
    "/admin",
    "/admin/genre",
    "/admin/cover",
    "/admin/discount",
    "/admin/gift",
    "/admin/product",
    "/admin/type",
    "/admin/account",
    "/admin/order",
    "/admin/stock",
    "/admin/sales",
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
