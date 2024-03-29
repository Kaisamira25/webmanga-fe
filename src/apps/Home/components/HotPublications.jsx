import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./HotPublications.module.scss";
import { fetchHotPublications } from "../../../services/Service";
import { useNavigate } from "react-router-dom";

function HotPublications() {
  const navigate = useNavigate();
  const [hotPublications, setHotPublications] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const fetchHotPublication = async () => {
    const response = await fetchHotPublications();
    setHotPublications(response.data.data);
    }
    fetchHotPublication();
  }, []);
  const handlePublicationId = (id) => {
    return navigate(`/detail/${id}`);
  };
  const handlePublicationGetId = (id) => {
    setCartList((prevCartList) => [...prevCartList, id]);
  };
  return (
    <article>
      <p>Hot sales</p>
      <div className="hotProducts">
        {hotPublications.map((item, index) => (
          <div key={index}>
            <Card
              imgSrc={item.imageURL}
              name={item.publicationsName}
              priceBeforeDiscount={item.unitPrice}
              // priceAfterDiscount={item.priceDis}
              onClickNavigate={handlePublicationId}
              onClickGetItem={handlePublicationGetId}
              id={item.publicationsId}
            />
          </div>
        ))}
      </div>
    </article>
  );
}

export default HotPublications;
