import HeaderDemo from "../../components/Header";
import Footer from "../../components/_Footer";
import Search from "../../components/_Search";
import Carousel from "./components/_Carousel";
import PopularItem from "./components/_Popular";
function HomePage() {
  return (
    <div>
      <div>
        <HeaderDemo />
      </div>
      <div className="mt-10">
        <Search />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="mt-4">
        <PopularItem/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
