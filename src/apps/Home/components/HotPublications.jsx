import Card from "./CardPublications";
import style from "./HotPublications.module.scss";
import imgShadowGarden from "../../../assets/imgs/ShadowGarden.jpg";
import img86 from '../../../assets/imgs/86.jpg';
import imgKaiju from '../../../assets/imgs/Kaiju08.jpg';
function HotPublications() {
  const card = [
    { id: 1, img: imgShadowGarden },
    { id: 2, img: img86 },
    { id: 3, img: imgKaiju},
    // { id: 4 },
    // { id: 5 }
  ];
  var productElement = document.querySelector('.cards');
  console.log(productElement);
  return (
    <article>
      <p className={style.title}>Hot Deals & New</p>
      <div className={style.wrapper}>
        {card.map((items, index) => {
          return (
            <div key={index} className={style.cards}>
              <Card imgSrc={items.img} />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default HotPublications;
