import style from "./CardPublications.module.scss";
import EyeIcon from "../../../assets/icons/EyeIcon";
import IconCart from "../../../assets/icons/CartIcon";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../../common/FormatCurrency";
function Card({
  id,
  imgSrc,
  name,
  priceBeforeDiscount,
  priceAfterDiscount,
  summary,
  onViewDetail,
  onAddToCart,
}) {
  const navigate = useNavigate();
  const handleAddCart = () => {
    navigate("/Cart");
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
