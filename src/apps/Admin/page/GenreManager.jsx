import { useState, useEffect } from "react";
import React from "react";
import SearchBar from "../components/SearchBar";
import GenreData from "../Services/GenreData";
import CloseBtn from "../../../assets/icons/CloseBtn";
import { AlertAdmin } from "../components/Alert";
import FormButton from "../components/FormButton";

function Genre() {
  const [genre, setGenre] = useState("");
  const {
    genres,
    fetchGenres,
    addGenres,
    updateGenres,
    deleteGenres,
    findGenre,
  } = GenreData();
  const [genreId, setGenreId] = useState("");
  const [vali, setVali] = useState("");
  const [info, setInfo] = useState("");

  const TH = [{ names: "Id" }, { names: "Genre" }, { names: "" }];
  const isGenreExist = () => {
    return genres.some(
      (item) => item.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const handleAddGenre = async () => {
    if (genre === null || genre === "") {
      setVali("error");
      setInfo("Genre name is not empty!");
    } else if (isGenreExist()) {
      setVali("error");
      setInfo("Genre name is exist!");
    } else {
      try {
        await addGenres({ genre });
        // Hiển thị alert khi thêm thể loại thành công
        setVali("success");
        setInfo("Adding complete");
        setGenre("");
      } catch (error) {
        // Xử lý khi có lỗi xảy ra trong quá trình thêm thể loại
        setVali("error");
        setInfo("Adding fail check field!");
      }
    }
  };
  const handleRowClick = (id) => {
    // Tìm kiếm thông tin genre từ mảng genres dựa trên ID đã truyền
    const selected = genres.find((genre) => genre.id === id);
    if (selected) {
      setGenre(selected.genre);
      setGenreId(selected.id);
    }
  };

  const handleUpdateGenre = async () => {
    if (genre === null || genre === "") {
      setVali("error");
      setInfo("Genre name is not empty!");
    } else if (isGenreExist()) {
      setVali("error");
      setInfo("Genre name is exist!");
    } else {
      try {
        await updateGenres(genreId, { genre });
        // Hiển thị alert khi thêm thể loại thành công
        setVali("success");
        setInfo("Update complete!");
        setGenre("");
      } catch (error) {
        // Xử lý khi có lỗi xảy ra trong quá trình thêm thể loại
        setVali("error");
        setInfo("Update fail!");
      }
    }
  };
  const handleDeleteGenre = async (id) => {
    try {
      const result = await deleteGenres(id);
      if (result !== true) {
        // Xóa thất bại
        setVali("error");
        setInfo("Delete fail!");
      } else {
        // Xóa thành công
        setVali("success");
        setInfo("Delete complete!");
      }
      setGenre("");
      fetchGenres();
    } catch (error) {
      console.error("Error deleting genre:", error);
    }
  };
  const handleSearchChange = async (e) => {
    const searchValue = e.target.value;
    await findGenre(searchValue);
  };
  useEffect(() => {
    // Xác định hàm để ẩn AlertAdmin sau 5 giây
    const hideAlert = setTimeout(() => {
      setVali("");
      setInfo("");
    }, 5000);

    // Clear timeout khi component unmount để tránh memory leaks
    return () => clearTimeout(hideAlert);
  }, [vali, info]);
  return (
    <div className="">
      <div className="mt-4">
        <div className="text-black text-start">
          <h3 className="font-bold">Manage Genre</h3>
        </div>
      </div>
      <div className="flex items-center">
        <div className=" w-12/12 py-4 flex-col inline-block w-3/12 me-1">
          <div className="relative w-full h-10 ">
            <input
              type="text"
              id="genre"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=""
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Genre
            </label>
          </div>
        </div>
        <div className="flex gap-1 h-10">
          <FormButton content={"Add"} onClick={handleAddGenre} />
          <FormButton content={"Update"} onClick={handleUpdateGenre} />
        </div>
        <AlertAdmin vali={vali} info={info} />
      </div>
      <div className="w-12/12 h-full mb-1 ">
        <form className="max-w-sm w-7/12">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              onChange={handleSearchChange}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="w-12/12 h-96 border-2 border-black overflow-y-scroll">
        <table className="w-full overflow-y-scroll  border-s border-black">
          <thead className="border-b border-black bg-gray-500 uppercase ">
            <tr>
              {TH.map((item, index) => (
                <th
                  className=" text-center font-bold border-r border-black"
                  key={index}
                >
                  {item.names}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-scroll h-3/4 overflow-auto">
            {genres.map((genreRow, rowIndex) => (
              <tr
                key={rowIndex}
                name={rowIndex}
                onClick={() => handleRowClick(genreRow.id)}
                className="cursor-pointer border-b  border-black hover:bg-gray-400"
              >
                {Object.values(genreRow).map((value, colIndex) => (
                  <td
                    className="text-center border-r border-black"
                    key={colIndex}
                  >
                    {value}
                  </td>
                ))}
                <td className="text-center border-r border-black">
                  <button
                    type="button"
                    onClick={() => handleDeleteGenre(genreRow.id)}
                    className="w-6 h-6 bg-red-600 rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <CloseBtn />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Genre;
