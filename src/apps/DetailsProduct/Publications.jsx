import style from "./Publications.module.scss";
import PublicationCard from "./components/PublicationCard";
import RelatedPublications from "./components/RelatedPublications";
function Publications() {
  return (
    <div className={style.container}>
      <div className={style.publicationCardWrapper}>
        <PublicationCard
          publicationsStatus={"Còn Hàng"}
          name={"Sword Art Online Unital Ring - IV"}
          priceBeforeDiscount={"100.000 VND"}
          priceAfterDiscount={"50.000 VND"}
        />
      </div>
      {/* <div className={style.relatedPublicationsWrapper}>
        <RelatedPublications />
      </div> */}
    </div>
  );
}

export default Publications;
