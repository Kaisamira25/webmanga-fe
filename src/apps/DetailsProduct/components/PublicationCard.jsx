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
  const [stock, setStock] = useState(0)
  const [quantity, setQuantity] = useState(0);
  const [listPublications, setListPublications] = useState({});
  useEffect(() => {
    const fetchPublications = fetchProductById(publicationsID);
    fetchPublications.then((response) => {
      setListPublications(response.data.data);
      setStock(response.data.data.stock)
    });
  }, [publicationsID]);

  const handleAddToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    let itemAlreadyInCart = false;

    const updatedCartItems = existingCartItems.map((item) => {
      if (item.id === listPublications.publicationsID) {
        item.qty += 1;
        itemAlreadyInCart = true;
      }
      return item;
    });

    if (!itemAlreadyInCart) {
      const newItem = {
        id: listPublications.publicationsID,
        qty: 1,
      };
      updatedCartItems.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };

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
          {listPublications.images && listPublications.images.length > 0 && (
            <img src={listPublications.images[0].imageURL} alt="" />
          )}

          <p className={style.status}>{stock < 0 ? "Out stock" : "In stock"}</p>
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
            <button onClick={handleAddToCart}>Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
