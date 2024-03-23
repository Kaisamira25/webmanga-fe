import React, { useState } from "react";
import { AlertAdmin } from "../componnents/Alert";
import SearchBar from "../componnents/SearchBar";
import CoverData from "../Services/CoverData";
import CloseBtn from "../../../assets/icons/CloseBtn";
import { system } from "faker/lib/locales/en";

function AdminCover() {
  const [coverType, setCoverType] = useState("");
  const { covers, addCovers, updateCovers, deleteCovers, findCover } =
    CoverData();
  const [coverId, setcoverId] = useState("");
  const [vali, setVali] = useState("");
  const [info, setInfo] = useState("");
  const TH = [{ names: "Id" }, { names: "CoverType" }, {}];
  const isCoverExist = () => {
    return covers.some(
      (item) => item.coverType.toLowerCase() === coverType.toLowerCase()
    );
  };

  const handleAddCover = async () => {
    if (coverType === null || coverType === "") {
      setVali("error");
      setInfo("Cover type is not empty!");
    } else if (isCoverExist()) {
      setVali("error");
      setInfo("CoverType is exist!");
    } else {
      try {
        await addCovers({ coverType });
        // Hiển thị alert khi thêm thể loại thành công
        setVali("success");
        setInfo("Adding complete");
        setCoverType("");
      } catch (error) {
        // Xử lý khi có lỗi xảy ra trong quá trình thêm thể loại
        setVali("error");
        setInfo("Adding fail check field!");
      }
    }
  };
  const handleRowClick = (id) => {
    const selected = covers.find((cover) => cover.id === id);
    console.log(id);
    if (selected) {
      setCoverType(selected.coverType);
      setcoverId(selected.id);
    }
  };
  const handleUpdateCover = async () => {
    if (coverType === null || coverType === "") {
      setVali("error");
      setInfo("Cover type is not empty!");
    } else if (isCoverExist()) {
      setVali("error");
      setInfo("Cover type is exist!");
    } else {
      console.log(coverId, coverType);
      try {
        await updateCovers(coverId, { coverType });
        // Hiển thị alert khi thêm thể loại thành công
        setVali("success");
        setInfo("Update complete!");
        setCoverType("");
      } catch (error) {
        // Xử lý khi có lỗi xảy ra trong quá trình thêm thể loại
        setVali("error");
        setInfo("Update fail!");
      }
    }
  };
  const handleDeleteCover = async (id) => {
    try {
      const result = await deleteCovers(id);
      if (result !== true) {
        // Xóa thất bại
        setVali("error");
        setInfo("Delete fail!");
      } else {
        // Xóa thành công
        setVali("success");
        setInfo("Delete complete!");
      }
      setCoverType("");
    } catch (error) {
      console.error("Error deleting cover:", error);
    }
  };
  const handleSearchChange = async (e) => {
    const searchValue = e.target.value;
    await findCover(searchValue);
    console.log(e.target.value);
    console.log(covers);
  };
  return (
    <div className="h-screen pt-12">
      <div className="mt-4">
        <div className="text-black text-start">
          <h3 className="font-bold">Manage Cover</h3>
        </div>
      </div>
      <div>
        <div className="py-5">
          <div className=" w-12/12 py-4 flex-col inline-block w-3/12 me-1">
            <div className="relative w-full h-10 ">
              <input
                type="text"
                id="cover"
                name="cover"
                value={coverType}
                onChange={(e) => setCoverType(e.target.value)}
                className=" peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=""
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                CoverType
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAddCover}
            className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleUpdateCover}
            className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Update
          </button>
          <AlertAdmin vali={vali} info={info} />
        </div>
        <div className="w-12/12 h-1/2 mb-1 ">
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
          <table className="w-full h-full overflow-y-scroll border-s border-black">
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
            <tbody>
              {covers.map((coverRow, rowIndex) => (
                <tr
                  key={rowIndex}
                  name={rowIndex}
                  onClick={() => handleRowClick(coverRow.id)}
                  className="cursor-pointer border-b  border-black hover:bg-gray-400"
                >
                  {Object.values(coverRow).map((value, col) => (
                    <td className="text-center border-r border-black" key={col}>
                      {value}
                    </td>
                  ))}
                  <td className="text-center border-r border-black py-2">
                    <button
                      type="button"
                      onClick={() => handleDeleteCover(coverRow.id)}
                      className="w-6 h-6 bg-red-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
    </div>
  );
}
export default AdminCover;