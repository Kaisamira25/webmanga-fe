import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./HotPublications.module.scss";
import { fetchHotPublications } from "../../../services/Service";



function HotPublications() {
  const [hotPublications, setHotPublications] = useState([]);

  useEffect(() => {
    const fetchHotPublicatios =  fetchHotPublications();
    fetchHotPublicatios.then(response => {
      setHotPublications(response.data.data);  
    })
  }, [])
  return (
    <article>
      <p>Hot sales</p>
      <div className="hotProducts">
        {hotPublications.map((item, index) => (
          <div key={index}>
            <Card imgSrc={item.imageURL} name={item.publicationsName} priceBeforeDiscount={item.unitPrice} priceAfterDiscount={item.priceDis}/>
          </div>
        ))}
      </div>
    </article>
  );
}

export default HotPublications;
