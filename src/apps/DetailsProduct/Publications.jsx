import style from "./Publications.module.scss";
import PublicationCard from "./components/PublicationCard";
function Publications() {
  return (
    <div className={style.container}>
      <div className={style.publicationCardWrapper}>
        <PublicationCard/>
      </div>
    </div>
  );
}

export default Publications;
