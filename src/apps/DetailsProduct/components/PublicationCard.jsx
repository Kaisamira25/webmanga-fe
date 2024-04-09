import { useParams } from "react-router";
import style from "../scss/PublicationCard.module.scss";
import Info from "./InfoSquare";
import { useEffect, useState } from "react";
import { fetchPublicationsDetailsInformation } from "../../../services/Service";

function PublicationCard({
  publicationsStatus,
  priceBeforeDiscount,
  priceAfterDiscount,
}) {
  let { id } = useParams();
  const [publicationsID, setPublicationID] = useState(() => {
    const parseId = parseInt(id);
    return parseId;
  });
  const [stock, setStock] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [listPublications, setListPublications] = useState({});
  const [publicationsInfo, setPublicationsInfo] = useState({});
  const [genres, setGenres] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchPublicationsDetails = async (id) => {
      const response = await fetchPublicationsDetailsInformation(id);
      setListPublications(id);
      console.log(response.data.data);
      setPublicationsInfo(response.data.data);
      setGenres(response.data.data.genres);
      setTypes(response.data.data.types[0]);
    };
    fetchPublicationsDetails(publicationsID);
  }, [publicationsID]);

  const handleAddToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    let itemAlreadyInCart = false;

    const updatedCartItems = existingCartItems.map((item) => {
      if (item.id === publicationsID) {
        item.qty += quantity;
        itemAlreadyInCart = true;
      }
      return item;
    });

    if (!itemAlreadyInCart) {
      const newItem = {
        id: publicationsID,
        qty: quantity,
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
          <img src={publicationsInfo.imageURL} alt="" />
          <p className={style.status}>{stock < 0 ? "Out stock" : "In stock"}</p>
        </div>
      </div>
      <div className={style.publicationInfo}>
        <p className={style.name}>{publicationsInfo.publicationsName}</p>
        <div className={style.infoPublications}>
          <div className={style.price}>
            <span>{priceBeforeDiscount}</span>
            <span>{priceAfterDiscount}</span>
          </div>
          <div className={style.info}>
            <div>
              <div>
                <Info label={"Author:"} content={publicationsInfo.author} />
              </div>
              <div>
                <Info
                  label={"Publisher:"}
                  content={publicationsInfo.publisher}
                />
              </div>
            </div>
            <div>
              <div>
                <Info label={"Type:"} content={types} />
              </div>
              <div>
                <Info
                  label={"Release Date:"}
                  content={publicationsInfo.publicationYear}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.description}>
          <label htmlFor="">Nội dung</label>
          <p>{publicationsInfo.summary}</p>
        </div>

        <div className={style.categories}>
          {genres.map((item, index) => (
            <a key={index}>{item}</a>
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
            <button onClick={handleAddToCart}>Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
