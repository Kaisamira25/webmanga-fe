import { useParams } from "react-router";
import style from "../scss/PublicationCard.module.scss";
import Info from "./InfoSquare";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../../services/Service";
function PublicationCard({
  publicationsStatus,
  priceBeforeDiscount,
  priceAfterDiscount,
}) {
  const [publicationsID, setPublicationID] = useState(() => {
    let { id } = useParams();
    const parseId = parseInt(id);
    return parseId;
  });
  const [quantity, setQuantity] = useState(0);
  const [listPublications, setListPublications] = useState({});
  useEffect(() => {
    const fetchPublications = fetchProductById(publicationsID);
    fetchPublications.then((response) => {
      setListPublications(response.data.data);
      console.log(listPublications);
    });
  }, [publicationsID]);
  // change quantity
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
<<<<<<< HEAD
         <img src={listPublications.images.imageURL} alt="" />
=======
          {listPublications.images && listPublications.images.length > 0 && (
            <img src={listPublications.images[0].imageURL} alt="" />
          )}
>>>>>>> 6285e6aacb9501672e76712ed390980e444db18d

          <p className={style.status}>{publicationsStatus}</p>
        </div>
      </div>

      <div className={style.publicationInfo}>
        <p className={style.name}>{listPublications.publicationsName}</p>

        <div className={style.infoPublications}>
          <div className={style.price}>
            <span>{priceBeforeDiscount}</span>
            <span>{priceAfterDiscount}</span>
          </div>
          <div className={style.info}>
            <div>
              <div>
                <Info
                  label={"Tên tác giả:"}
                  content={" " + listPublications.author}
                />
              </div>
              <div>
                <Info
                  label={"Nhà xuất bản:"}
                  content={" " + listPublications.publisher}
                />
              </div>
            </div>
            <div>
              <div>
                {/* <Info
                    label={"Loại:"}
                    content={" " + item.categories.join(", ")}
                  /> */}
              </div>
              <div>
                <Info
                  label={"Năm xuất bản:"}
                  content={" " + listPublications.publicationYear}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={style.description}>
          <label htmlFor="">Nội dung</label>

          <p>{listPublications.summary}</p>
        </div>

        <div className={style.categories}>
          {/* {item.categories.map((category, index) => (
              <a key={index} href="/" style={{ marginRight: "5px" }}>
                {category}
              </a>
            ))} */}
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
