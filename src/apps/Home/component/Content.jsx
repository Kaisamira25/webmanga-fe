import BtnSearch from "../../../components/BtnSearch";
import SearchBar from "../../../components/Search";
import Carousel from "./Carousel";
import PopularView from "./PopularView";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

function Content() {
  return (
    <div>
      <div className="carousel mt-12">
        <Carousel />
      </div>
      <div className="px-5">
        <div className="search-bar mt-10 flex justify-center">
          <div className="w-1/2">
            <p className="px-2 font-semibold">Search</p>
            <div className="h-9 flex gap-2">
              <SearchBar
                className={"w-full h-full outline-none rounded-full px-5"}
              />
              <BtnSearch
                className={
                  "bg-wrapper200 w-14 rounded-full px-2 flex justify-center items-center hover:bg-green500 transition-colors duration-300"
                }
                value={<ArrowIcon />}
              />
            </div>
          </div>
        </div>
        <div className="mt-14 bg-white100">
          <p className="text-center text-3xl mb-10">Popular Product</p>
          <PopularView />
        </div>
        <div className="mt-8">
          
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Content;
