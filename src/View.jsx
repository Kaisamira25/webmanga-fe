import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import routes from "./routers/Router";
import Header from "./components/header/Header";
import { Suspense, useEffect, useState } from "react";

function Views() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const shouldDisplayHeaderFooter = ![
    "/login",
    "/Login",
    "/register",
    "/otp",
    "/otp/resetpassword",
    "/newpassword",
    "/authentication/login/admin/account",
    "/resetpassword",
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

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    const isAdmin = role === "ADMIN";

    if (
      !isAdmin &&
      routes.some(
        (route) =>
          route.adminRequired && location.pathname.startsWith(route.path)
      )
    ) {
      navigate("/home");
    }
  }, [location.pathname]);

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
