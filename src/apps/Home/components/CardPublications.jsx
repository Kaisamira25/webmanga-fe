import style from "./CardPublications.module.scss";
import EyeIcon from "../../../assets/icons/EyeIcon";
function Card({ imgSrc, name, priceBeforeDiscount, priceAfterDiscount }) {
  return (
    <div className={style.cardWrapper}>
      <img src={imgSrc} alt="" />
      <div className={style.moreInfo}>
        <a href="/">
          {/* <EyeIcon /> */}
          <p className="line-clamp-2">{name}</p>
        </a>
        <div>
          <span>{priceBeforeDiscount} đ</span>
          <span>{priceAfterDiscount} đ</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
