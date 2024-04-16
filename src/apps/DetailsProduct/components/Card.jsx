import style from "../scss/Card.module.scss";
function Card({
  imgUrl,
  handleNavigateToDetailsProduct,
  idPublications,
  titlePublications,
}) {
  return (
    <article
      onClick={() => handleNavigateToDetailsProduct(idPublications)}
      className={style.container}
    >
      <div className={style.imageWrapper}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={style.infoPublicationsWrapper}>
        <p>{titlePublications}</p>
      </div>
    </article>
  );
}

export default Card;
