import Card from "./CardPublications";
import style from "./HotPublications.module.scss";
import img from "../../../assets/imgs/ShadowGarden.jpg";
function HotPublications() {
  const card = [
    { id: 1 },
    { id: 2 },
    // { id: 1 },
    // { id: 1 },
    // { id: 1 }
  ];
  return (
    <article>
      <p className={style.title}>Hot Deals & New</p>
      <div className={style.wrapper}>
        {card.map((items) => {
          return (
            <div className={style.cards}>
              <Card imgSrc={img} />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default HotPublications;
