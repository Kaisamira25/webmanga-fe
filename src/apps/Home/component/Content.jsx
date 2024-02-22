import BtnSearch from "../../../components/BtnSearch";
import SearchBar from "../../../components/Search";
import Carousel from "./Carousel";
import PopularView from "./PopularView";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

function Content() {
  return (
    <div>
      <div className="search-bar mt-16 flex justify-center">
        <div className="w-1/2">
          <p className="px-2 font-semibold">Search</p>
          <div className="h-9 flex gap-2">
            <SearchBar
              className={"w-full h-full outline-none rounded-full px-5"}
            />
            <BtnSearch
              className={
                "bg-wrapper200 w-14 rounded-full px-2 flex justify-center items-center"
              }
              value={<ArrowIcon />}
            />
          </div>
        </div>
      </div>
      <div className="carousel mt-12">
        <Carousel />
      </div>
      <div className="mt-16 bg-blue-300">
        <PopularView />
      </div>
    </div>
  );
}

export default Content;
