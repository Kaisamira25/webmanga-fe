import { useState } from "react";
import AdminStyle from "./scss/Admin.module.scss";
import BoxIcon from "../../assets/icons/BoxIcon";
import EmployeeIcon from "../../assets/icons/EmployeeIcon";
import StatisIcon from "../../assets/icons/StatisIcon";
import { useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate();
  const [content, setContent] = useState("genres");
  const handleChangeContent = (path) => {
    // const page = e.target.getAttribute("value");
    navigate(`/admin/${path}`);
    // setContent(page);
  };
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
                <li
                  value={"genres"}
                  onClick={() => handleChangeContent("genres")}
                >
                  Genres
                </li>
                <li
                  value={"types"}
                  onClick={() => handleChangeContent("types")}
                >
                  Types
                </li>
                <li
                  value={"gifts"}
                  onClick={() => handleChangeContent("gifts")}
                >
                  Gifts
                </li>
                <li
                  value={"covers"}
                  onClick={() => handleChangeContent("covers")}
                >
                  Covers
                </li>
                <li
                  value={"publications"}
                  onClick={() => handleChangeContent("publications")}
                >
                  Publications
                </li>
                <li
                  value={"discounts"}
                  onClick={() => handleChangeContent("discounts")}
                >
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
        {/* <section className={AdminStyle.content}>
          {content === "genres" && <GenresManager />}
          {content === "types" && <TypesManager />}
          {content === "gifts" && <GiftsManager />}
          {content === "covers" && <CoversManager />}
          {content === "publications" && <PublicationsManager />}
          {content === "discounts" && <DiscountsManager />}
        </section> */}
      </div>
    </div>
  );
}

export default Admin;
