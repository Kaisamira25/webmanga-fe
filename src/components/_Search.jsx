import SearchIcon from "../assets/icons/MaterialSymbolsSearch";
function Search() {
  return (
    <div className="p-5 w-full flex justify-center">
      <div className="flex flex-col w-3/5 lg:w-4/12">
        <div className="w-full text-black hidden md:block justify-self-start">
          Search
        </div>
        <div className="w-full relative">
          <input
            className="w-full rounded-lg outline-none py-2 px-5 bg-white50 transition hover:bg-[#cbd6d0] duration-300 border drop-shadow hover:border-[#cbd6d0] focus:bg-[#ced8d3] focus:border-[#ced8d3]"
            type="text"
          />
          <span className="absolute right-0 mt-3 mr-1">
            <button>
              <SearchIcon />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
