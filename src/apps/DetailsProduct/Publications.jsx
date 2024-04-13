import { useEffect, useState } from "react";
import style from "./Publications.module.scss";
import PublicationCard from "./components/PublicationCard";
import RelatedPublications from "./components/RelatedPublications";
import { useParams } from "react-router-dom";
import {
  fetchPublicationsByAuthor,
  fetchPublicationsDetailsInformation,
} from "../../services/Service";
function Publications() {
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
  const [discountPrice, setDiscountPrice] = useState(130000);
  const [publicationsByAuthor, setPublicationsByAuthor] = useState({});
  useEffect(() => {
    const fetchPublicationsDetails = async (id) => {
      const publicationsDetailResponse = await fetchPublicationsDetailsInformation(id);
      const authorName = publicationsDetailResponse.data.data.author;
      const publicationsByAuthorResponse = await fetchPublicationsByAuthor(authorName);
      const publicationsByAuthor = publicationsByAuthorResponse.data.data.filter(item => item.publicationsID !== id);
      // Set state cho các state
      setPublicationsInfo(publicationsDetailResponse.data.data);
      setGenres(publicationsDetailResponse.data.data.genres);
      setTypes(publicationsDetailResponse.data.data.types[0]);
      setPublicationsByAuthor(publicationsByAuthor);
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
  const handleChoosenOtherPublications = (id) => {
    setPublicationID(id);
  }
  return (
    <div className={style.container}>
      <div className={style.publicationCardWrapper}>
        <PublicationCard
          imgUrl={publicationsInfo.imageURL}
          stock={stock}
          genres={genres}
          author={publicationsInfo.author}
          publisher={publicationsInfo.publisher}
          types={types}
          publicationsYear={publicationsInfo.publicationYear}
          publicationsName={publicationsInfo.publicationsName}
          discountPrice={discountPrice}
          unitPrice={publicationsInfo.unitPrice}
          summary={publicationsInfo.summary}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleAddToCart={handleAddToCart}
          quantity={quantity}
        />
      </div>
      <div className={style.relatedPublications}>
        <RelatedPublications publicationsByAuthorName={publicationsByAuthor} handleChoosenOtherPublications={handleChoosenOtherPublications}/>
      </div>
    </div>
  );
}

export default Publications;
