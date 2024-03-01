import Home from "./apps/Home/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PaymentPage from "./pages/Payment/PaymentPage";

function Views() {
  return (
    <div>
      {/* a */}
      <Header />
      <PaymentPage />
      <Footer />
    </div>
  );
}

export default Views;
