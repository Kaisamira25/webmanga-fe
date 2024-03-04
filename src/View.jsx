import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import routes from "./routers/Router";
import Header from "./components/header/Header";
import { Suspense } from "react";
import CartPage from "./apps/Cart/CartPage";
import Payment from "./apps/Payment/Payment";
function Views() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense> */}
      <CartPage/>
      {/* <Payment/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Views;
