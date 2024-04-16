import style from "../scss/Card.module.scss";
import IconEye from "../../../assets/icons/EyeIcon";
import { Link } from "react-router-dom";
function Card({ imgUrl }) {
  return (
    <article className={style.container}>
      <div className={style.imageWrapper}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={style.viewDetail}>
        <Link to={"/detail"}>
          <IconEye />
          <span>More detail</span>
        </Link>
      </div>
    </article>
    // <article className={style.container}>
    //   <img src={imgUrl} alt="" />
    //   <div className={style.content}>
    //     <a href="/">{name}</a>
    //     <div>
    //         <span>{beforeDiscount}</span>
    //         <span>{afterDiscount}</span>
    //     </div>
    //   </div>
    // </article>
  );
}

export default Card;
