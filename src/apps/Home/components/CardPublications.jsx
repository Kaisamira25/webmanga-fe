import style from "./CardPublications.module.scss";
import EyeIcon from "../../../assets/icons/EyeIcon";
import IconCart from "../../../assets/icons/CartIcon";
import { Link, useNavigate } from "react-router-dom";
function Card({ id, imgSrc, name, priceBeforeDiscount, priceAfterDiscount }) {
  const navigate = useNavigate();
  const handleAddCart = () => {
    navigate("/Cart");
  };

  return (
    <div className={style.containerCard}>
      <div className={style.imgWrapper}>
        <Link to={`/Detail/${id}`}>
          <img src={imgSrc} alt="" />
          <div>
            <Link>{<EyeIcon />}</Link>
          </div>
        </Link>
      </div>
      <div className={style.information}>
        <Link>
          <p>{name}</p>
        </Link>
        <div>
          <span>{priceAfterDiscount} VND</span>
          <span>{priceBeforeDiscount} VND</span>
        </div>
      </div>
      <button onClick={handleAddCart}>
        <IconCart />
      </button>
    </div>
  );
}

export default Card;
