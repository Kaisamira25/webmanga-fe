import style from "../scss/PublicationCard.module.scss";
import img from "../../../assets/imgs/SAOUnitalRing.jpg";
import Info from "./InfoSquare";
import { useState } from "react";
function PublicationCard({
  publicationsStatus,
  name,
  priceBeforeDiscount,
  priceAfterDiscount,
}) {
  const categorieList = [
    { id: 1, name: "Light Novel" },
    { id: 2, name: "Fantasy" },
    { id: 3, name: "Manga - Comic" },
    { id: 4, name: "Detective" },
    { id: 5, name: "Action" },
    { id: 6, name: "Romance" },
  ];
  const [quantity, setQuantity] = useState(0);
  const handleDecreaseQuantity = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.imgWrapper}>
        <div>
          <img src={img} alt="" />
          <p className={style.status}>{publicationsStatus}</p>
        </div>
      </div>
      <div className={style.publicationInfo}>
        {/* <p className={style.status}>{publicationsStatus}</p> */}
        <p className={style.name}>{name}</p>
        <div className={style.infoPublications}>
          <div className={style.price}>
            <span>{priceBeforeDiscount}</span>
            <span>{priceAfterDiscount}</span>
          </div>
          <div className={style.info}>
            <div>
              <div>
                <Info label={"Tác giả:"} content={" Hiếu Đỗ"} />
              </div>
              <div>
                <Info label={"Nhà xuất bản:"} content={" Hiếu Đỗ"} />
              </div>
            </div>
            <div>
              <div>
                <Info label={"Loại:"} content={" Bìa cứng"} />
              </div>
              <div>
                <Info label={"Năm xuất bản:"} content={" 2024"} />
              </div>
            </div>
          </div>
        </div>

        <div className={style.decription}>
          <label htmlFor="">Nội dung</label>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
            ipsam nesciunt atque expedita voluptatum repellendus ab suscipit
            nihil labore repellat dolore accusantium quod, dolor, tempora
            corrupti totam perspiciatis earum impedit! lo
          </p>
        </div>
        <div className={style.categories}>
          {categorieList.map((item, index) => (
            <a key={index} href="/">
              {item.name}
            </a>
          ))}
        </div>
        <div className={style.type}>
          <select name="type" id="">
            <option value="special">Bản đặc biệt</option>
            <option value="normal">Bản thường</option>
          </select>
        </div>
        <div className={style.quantity}>
          <div className="quantity">
            <button onClick={handleDecreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
          <div className="addCart">
            <button>Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
