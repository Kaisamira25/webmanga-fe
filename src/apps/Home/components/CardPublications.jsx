import style from "./CardPublications.module.scss";
import EyeIcon from "../../../assets/icons/EyeIcon";
import IconCart from "../../../assets/icons/CartIcon";
function Card({
  imgSrc,
  name,
  priceBeforeDiscount,
  priceAfterDiscount,
  summary,
}) {
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
            <button>
              <IconCart />
            </button>
            <button>
              <EyeIcon />
            </button>
          </div>
          <div className={style.summary}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              accusamus ipsum, cum a facilis tenetur doloremque quos qui
              corporis labore. Est perferendis ducimus placeat et modi delectus
              blanditiis soluta quos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
