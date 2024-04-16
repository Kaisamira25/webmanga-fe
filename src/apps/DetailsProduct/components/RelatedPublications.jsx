import style from "../scss/RelatedPublications.module.scss";
import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
function RelatedPublications({
  publicationsByAuthorName,
  handleChoosenOtherPublications,
}) {
  const handleNavigateToDetails = (id) => {
    handleChoosenOtherPublications(id);
  };

  // const sameAuthorWrapper = document.querySelector(
  //   `.${style.sameAuthorWrapper}`
  // );
  // const cardWrapper = document.querySelector(`.${style.cardWrapper}`);
  // let scrollPosition = 0;
  // const updateScroll = () => {
  //   cardWrapper.style.transform = `translateX(${scrollPosition}px)`;
  // };
  // sameAuthorWrapper.addEventListener("scroll", function () {
  //   scrollPosition = sameAuthorWrapper.scrollLeft;
  //   updateScroll();
  // });
  // const prevButton = document.querySelector(`.${style.prevButton}`);
  // const nextButton = document.querySelector(`${style.nextButton}`);

  // prevButton.addEventListener("click", function () {
  //   scrollPosition -= 200; // Di chuyển sang trái
  //   updateScroll();
  // });

  // nextButton.addEventListener("click", function () {
  //   scrollPosition += 200; // Di chuyển sang phải
  //   updateScroll();
  // });
  return (
    <div className={style.container}>
      <div className={style.sameAuthorContainer}>
        <h5>SAME AUTHOR</h5>
        <div className={style.sameAuthorWrapper}>
          <div className={style.cardWrapper}>
            {Array.isArray(publicationsByAuthorName) &&
              publicationsByAuthorName.map((item, index) => (
                <Card
                  key={index}
                  imgUrl={item.images[0].imageURL}
                  handleNavigateToDetailsProduct={handleNavigateToDetails}
                  idPublications={item.publicationsID}
                  titlePublications={item.publicationsName}
                />
              ))}
          </div>
          <div className={style.navigateButton}>
            <button className={style.prevButton}>Prev</button>
            <button className={style.nextButton}>Next</button>
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
