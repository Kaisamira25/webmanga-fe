import { useState } from "react";
import AdminStyle from "./scss/Admin.module.scss";
import BoxIcon from "../../assets/icons/BoxIcon";
import EmployeeIcon from "../../assets/icons/EmployeeIcon";
import StatisIcon from "../../assets/icons/StatisIcon";
import { useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate();
  const handleChangeContent = (path) => {
    navigate(`/admin/${path}`);
  };
  const handleLogoutAdmin = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("accessToken");
    navigate("/home");
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
                <li onClick={() => handleChangeContent("genres")}>Genres</li>
                <li onClick={() => handleChangeContent("types")}>Types</li>
                <li onClick={() => handleChangeContent("gifts")}>Gifts</li>
                <li onClick={() => handleChangeContent("covers")}>Covers</li>
                <li onClick={() => handleChangeContent("publications")}>Publications</li>
                <li onClick={() => handleChangeContent("discounts")}>Discounts</li>
              </ul>
              <ul>
                <li>
                  <EmployeeIcon />
                </li>
                <li onClick={() => handleChangeContent("employees")}>
                  Employee Account
                </li>
                <li onClick={() => handleChangeContent("customers")}>Customer Account</li>
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
              <li onClick={handleLogoutAdmin}>Logout</li>
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
