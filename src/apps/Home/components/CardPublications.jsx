import style from "./CardPublications.module.scss";
import EyeIcon from "../../../assets/icons/EyeIcon";
import IconCart from "../../../assets/icons/CartIcon";
import { useNavigate } from "react-router-dom";
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
            <button onClick={onAddToCart}>
              <IconCart />
            </button>
            <button onClick={() => onViewDetail(id)}>
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
