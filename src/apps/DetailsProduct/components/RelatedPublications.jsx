import style from "../scss/RelatedPublications.module.scss";
import React, { useState, useEffect } from "react";
function RelatedPublications() {
  
  return (
    <div className={style.container}>
      <div className={style.sameAuthorContainer}></div>
      <div className={style.sameGenreContainer}></div>
    </div>
  );
}

export default RelatedPublications;
