import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./NewPublications.module.scss";
import { fetchNewPublications } from "../../../services/Service";
import { useNavigate } from "react-router-dom";

function NewPublications() {
  const navigate = useNavigate();
  const [newPublications, setNewPublications] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const fetchNewPublication = async () => {
      const response = await fetchNewPublications();
      setNewPublications(response.data.data);
    };
    fetchNewPublication();
  }, []);
  const handlePublicationId = (id) => {
    return navigate(`/detail/${id}`);
  };
  const handlePublicationGetId = (id) => {
    setCartList((prevCartList) => [...prevCartList, id]);
  };
  console.log(cartList);
  return (
    <div className={style.newProductWrapper}>
      <p>New lightnovel</p>
      <div className={style.wrapper}>
        <div className={style.inner}>
          {newPublications.map((item, index) => (
            <Card
              key={index}
              imgSrc={item.imageURL}
              name={item.publicationsName}
              priceBeforeDiscount={item.unitPrice}
              // priceAfterDiscount={item.unitPrice}
              onClickNavigate={handlePublicationId}
              onClickGetItem={handlePublicationGetId}
              id={item.publicationsId}
            />
          ))}
          <div className={style.fakeDiv}></div>
        </div>
      </div>
    </div>
  );
}

export default NewPublications;
