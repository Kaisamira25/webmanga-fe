import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./NewPublications.module.scss";
import { fetchNewPublications } from "../../../services/Service";
function NewPublications() {
  const [newPublications, setNewPublications] = useState([]);
useEffect(() => {
  const fetchNewPublication = fetchNewPublications();
  fetchNewPublication.then(res => {
    setNewPublications(res.data.data)
  })
},[])
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
              priceAfterDiscount={item.unitPrice}
              priceBeforeDiscount={item.price}
            />
          ))}
          <div className={style.fakeDiv}></div>
        </div>
      </div>
    </div>
  );
}

export default NewPublications;
