import { useEffect, useState } from "react";
import AboveContentStyle from "../scss/AboveContent.module.scss";
import Introduce from "./Introduce";
import Shipping from "../../../assets/icons/Shipping";
import WideVariety from "../../../assets/icons/WideVariety";
import Money from "../../../assets/icons/Money";
import Contact from "../../../assets/icons/Contact";
import CardPublications from "./CardPublications";
import {
  fetchNewPublications,
  fetchHotPublications,
} from "../../../services/Service";
function AboveContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [publications, setPublications] = useState([]);
  const items = [
    { label: "NEW", apiCall: () => fetchNewPublications() },
    { label: "BEST SELLER", apiCall: () => fetchHotPublications() },
  ];
  const introduce = [
    { label: "FAST DELIVERY", icon: <Shipping /> },
    { label: "WIDE VARIETY", icon: <WideVariety /> },
    { label: "ALWAYS DISCOUNT", icon: <Money /> },
    { label: "0988681424 0988771283", icon: <Contact /> },
  ];
  useEffect(() => {
    const callApiNewPublications = async () => {
      const response = await fetchNewPublications();
      setPublications(response.data.data);
    };
    callApiNewPublications();
  }, []);
  const handleCallApi = async (index) => {
    setActiveIndex(index);
    const response = await items[index].apiCall();
    setPublications(response.data.data);
  };
  return (
    <div className={AboveContentStyle.aboveContainer}>
      <div className={AboveContentStyle.introduce}>
        {introduce.map((item, index) => (
          <Introduce key={index} label={item.label} icon={item.icon} />
        ))}
      </div>
      <div className={AboveContentStyle.selectionWrapper}>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={
                index === activeIndex ? `${AboveContentStyle.active}` : ""
              }
              onClick={() => handleCallApi(index)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className={AboveContentStyle.abovePublicationsContainer}>
          {publications.map((item, index) => (
            <CardPublications
              id={item.publicationsId}
              imgSrc={item.imageURL}
              name={item.publicationsName}
              key={index}
              priceBeforeDiscount={item.unitPrice}
            />
          ))}
      </div>
    </div>
  );
}

export default AboveContent;
