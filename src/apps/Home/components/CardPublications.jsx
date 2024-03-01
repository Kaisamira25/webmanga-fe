import style from "./CardPublications.module.scss";
function Card({imgSrc}) {
    return ( 
        <div className={style.card}>
            <img className="h-full" src={imgSrc} alt="" />
        </div>
     );
}

export default Card;