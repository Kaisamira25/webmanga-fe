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
    <div className={style.container}>
      <div className={style.image}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={style.info}>
        <a href="/">
          <p>{name}</p>
        </a>
        <div>
          <div className={style.price}>
            <span>{priceBeforeDiscount}</span>
            <span>{priceAfterDiscount}</span>
          </div>
          <div className={style.btn}>
            <button onClick={handleAddCart}>
              <IconCart />
            </button>
            <button onClick={handleViewDetail}>
              <EyeIcon />
            </button>
          </div>
          <div className={style.summary}>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
