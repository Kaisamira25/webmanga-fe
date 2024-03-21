import style from "./CardPublications.module.scss";
import EyeIcon from "../../../assets/icons/EyeIcon";
import IconCart from "../../../assets/icons/CartIcon";
import { Link, useNavigate } from "react-router-dom";
function Card({
  imgSrc,
  name,
  priceBeforeDiscount,
  priceAfterDiscount,
  summary,
}) {
  const navigate = useNavigate();
  const handleAddCart = () => {
    navigate("/Cart");
  };
  const handleViewDetail = () => {
    navigate("/Detail");
  };

  return (
    <div className={style.containerCard}>
      <div className={style.imgWrapper}>
        <Link to={"/"}>
          <img src={imgSrc} alt="" />
          <div>
            <Link>
              {<EyeIcon/>}
            </Link>
          </div>
        </Link>
      </div>
      <div className={style.information}>
        <Link to={"/"}>
          <p>{name}</p>
        </Link>
        <div>
          <span>{priceAfterDiscount} VND</span>
          <span>{priceBeforeDiscount} VND</span>
        </div>
      </div>
      <button>
        <IconCart/>
      </button>
    </div>
  );
}

export default Card;
