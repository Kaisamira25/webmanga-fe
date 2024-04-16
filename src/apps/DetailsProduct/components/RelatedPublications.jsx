import style from "../scss/RelatedPublications.module.scss";
import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import ArrowBack from "../../../assets/icons/ArrowBack";
import ArrowForward from "../../../assets/icons/ArrowForward";
function RelatedPublications({
  publicationsByAuthorName,
  handleChoosenOtherPublications,
}) {
  // const sameAuthorWrapper = useRef(null);
  // const cardWrapper = useRef(null);
  // let scrollPosition = 0;

  const handleNavigateToDetails = (id) => {
    handleChoosenOtherPublications(id);
  };

  // const updateScroll = () => {
  //   window.requestAnimationFrame(() => {
  //     cardWrapper.current.style.transform = `translateX(${scrollPosition}px)`;
  //   });
  // };

  // const handleScroll = () => {
  //   scrollPosition = sameAuthorWrapper.current.scrollLeft;
  //   updateScroll();
  // };

  // const handlePrevClick = () => {
  //   scrollPosition -= 256; // Adjust this value as needed
  //   updateScroll();
  // };

  // const handleNextClick = () => {
  //   scrollPosition += 256; // Adjust this value as needed
  //   updateScroll();
  // };

  // useEffect(() => {
  //   sameAuthorWrapper.current.addEventListener("scroll", handleScroll);
  //   return () => {
  //     sameAuthorWrapper.current.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className={style.container}>
      <div className={style.sameAuthorContainer}>
        <h5>SAME AUTHOR</h5>
        <div
          className={style.sameAuthorWrapper}
          // ref={sameAuthorWrapper}
          // onScroll={handleScroll}
        >
          <div
            className={style.cardWrapper}
            //  ref={cardWrapper}
          >
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
            <button
              className={style.prevButton}
              // onClick={handlePrevClick}
            >
              <ArrowBack />
            </button>
            <button
              className={style.nextButton}
              // onClick={handleNextClick}
            >
              <ArrowForward />
              {/* adfa */}
            </button>
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
