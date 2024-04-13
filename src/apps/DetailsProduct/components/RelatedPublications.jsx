import style from "../scss/RelatedPublications.module.scss";
import React, { useState, useEffect } from "react";
import Card from "./Card";
function RelatedPublications({ publicationsByAuthorName, handleChoosenOtherPublications }) {
  const handleNavigateToDetails = (id) => {
     handleChoosenOtherPublications(id);
  };
  return (
    <div className={style.container}>
      <div className={style.sameAuthorContainer}>
        <div className={style.sameAuthorWrapper}>
          <h5>SAME AUTHOR</h5>
          <div className={style.cardWrapper}>
            {Array.isArray(publicationsByAuthorName) &&
              publicationsByAuthorName.map((item, index) => (
                <Card
                  key={index}
                  imgUrl={item.images[0].imageURL}
                  handleNavigateToDetailsProduct={handleNavigateToDetails}
                  idPublications={item.publicationsID}
                />
              ))}
          </div>
        </div>
      </div>
      {/* <div className={style.sameGenreContainer}>
        <div className={style.sameGenreWrapper}>
          <h5>Same Genre</h5>
        </div>
      </div> */}
    </div>
  );
}

export default RelatedPublications;
