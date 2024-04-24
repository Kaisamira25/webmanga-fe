import { useState } from "react";
import AdminStyle from "./scss/Admin.module.scss";
import BoxIcon from "../../assets/icons/BoxIcon";
import EmployeeIcon from "../../assets/icons/EmployeeIcon";
import StatisIcon from "../../assets/icons/StatisIcon";
import GenresManager from "./components/GenresManager";
import TypesManager from "./components/TypesManager";
import GiftsManager from "./components/GiftsManager";
import CoversManager from "./components/CoversManager";
import PublicationsManager from "./components/PublicationsManager";
import DiscountsManager from "./components/DiscountsManager";
import { Route, Routes, useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate();
  const [content, setContent] = useState("genres");
  const handleChangeContent = (e) => {
    const page = e.target.getAttribute("value");
    navigate("/" + page);
    // setContent(page);
  };
  const handleNavigateToGenre = () => {};
  return (
    <div className={AdminStyle.adminContainer}>
      <div className={AdminStyle.adminWrapper}>
        <aside>
          <div className={AdminStyle.publicationsWrapper}>
            <div>
              <h5>Lainovo</h5>
              <ul>
                <li>
                  <BoxIcon />
                </li>
                <li value={"genres"} onClick={(e) => handleChangeContent(e)}>
                  Genres
                </li>
                <li value={"types"} onClick={(e) => handleChangeContent(e)}>
                  Types
                </li>
                <li value={"gifts"} onClick={(e) => handleChangeContent(e)}>
                  Gifts
                </li>
                <li value={"covers"} onClick={(e) => handleChangeContent(e)}>
                  Covers
                </li>
                <li
                  value={"publications"}
                  onClick={(e) => handleChangeContent(e)}
                >
                  Publications
                </li>
                <li value={"discounts"} onClick={(e) => handleChangeContent(e)}>
                  Discounts
                </li>
              </ul>
              <ul>
                <li>
                  <EmployeeIcon />
                </li>
                <li>Employee Account</li>
                <li>Customer Account</li>
              </ul>
              <ul>
                <li>
                  <StatisIcon />
                </li>
                <li>Invoice Statistics</li>
                <li>Revenue Statistics</li>
              </ul>
            </div>
            <ul>
              <li>Home</li>
              <li>Logout</li>
            </ul>
          </div>
        </aside>
        <section className={AdminStyle.content}>
          <Routes>
            <Route path="/genres" element={<GenresManager />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default Admin;
