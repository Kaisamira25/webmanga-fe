import style from "./Publications.module.scss";
import PublicationCard from "./components/PublicationCard";
import RelatedPublications from "./components/RelatedPublications"
function Publications() {
  return (
    <div className={style.container}>
      <div className={style.publicationCardWrapper}>
        <PublicationCard/>
      </div>
      <div className={style.relatedPublications}>
        <RelatedPublications />
      </div>
    </div>
  );
}

export default Publications;
