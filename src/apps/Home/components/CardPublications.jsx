import style from "./CardPublications.module.scss";
import EyeIcon from "../../../assets/icons/EyeIcon";
import IconCart from "../../../assets/icons/CartIcon";
import { useNavigate } from "react-router-dom";
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
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}

export default Card;
