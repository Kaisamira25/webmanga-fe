import style from "../scss/Card.module.scss";
function Card({ imgUrl, handleNavigateToDetailsProduct, idPublications }) {
  
  return (
    <article onClick={() => handleNavigateToDetailsProduct(idPublications)} className={style.container}>
      <div className={style.imageWrapper}>
        <img src={imgUrl} alt="" />
      </div>
    </article>
  );
}

export default Card;
