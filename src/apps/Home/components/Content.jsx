import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import ReactPaginate from "react-paginate";
import {
  fetchAllPublications,
  fetchAllImages,
  fetchPublicationContentPagingate,
} from "../../../services/Service";

function Content() {
  // const productList = [
  //   {
  //     id: 1,
  //     name: "Classroom of the Elite Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81+8UiitTuL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 2,
  //     name: "Re:Zero: Starting Life in Another World Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/814oNkHZi7L._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 3,
  //     name: "Mushoku Tensei: Jobless Reincarnation Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81mDZHZbtAL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 4,
  //     name: "Goblin Slayer Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/91k5blHZFyL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 5,
  //     name: "Grimgar of Fantasy and Ash Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/91NTidW+ITL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 6,
  //     name: "Classroom of the Elite: Year 2 Vol. 8",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81xZqAhvRrL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 7,
  //     name: "Toradora! Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81UIuiGkPFL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 8,
  //     name: "Mushoku Tensei: Jobless Reincarnation Vol. 14",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81OZnAhp5TL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 9,
  //     name: "Bunny Girl Senpai Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81pcsJPLQGL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 10,
  //     name: "The Angel Next Door Spoils Me Rotten Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81cXBPgRaPL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 11,
  //     name: "The Dawn of the Witch Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/811mGlibl+L._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 12,
  //     name: "Disciple of the Lich: Or How I Was Cursed by the Gods and Dropped Into the Abyss! Vol. 5",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81Wm3ZSutpL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 13,
  //     name: "Reincarnated as a Sword Vol. 4",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81sNiE9zJHL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 14,
  //     name: "The Villainess Enjoys a Carefree Life Married to Her Worst Enemy! Vol. 2",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/815STNVDERL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 15,
  //     name: "How a Realist Hero Rebuilt the Kingdom Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/81RYM0wsPLL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  //   {
  //     id: 16,
  //     name: "Sentenced to Be a Hero Vol. 1",
  //     imgURL:
  //       "https://m.media-amazon.com/images/I/91MPiCuqgbL._AC_UF1000,1000_QL80_.jpg",
  //     price: "100,000",
  //     priceDis: "50,000",
  //   },
  // ];
  const [productList, setProductList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // useEffect(() => {
  //   getPublications();
  // }, []);

  // const getPublications = async () => {
  //   try {
  //     const response = await fetchAllPublications();
  //     console.log("Response data: ", response.data);
  //     const data = response.data.data.map((item, index) => {
  //       let imageURL = item.image_url
          // ? `${process.env.REACT_APP_IMAGE_BASE_URL}${item.image_url
  //             .split("/")
  //             .pop()}`
  //         : "";
  //       return {
  //         ...item,
  //         imgURL: imageURL,
  //         key: index,
  //       };
  //     });
  //     setProductList(data);
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // };
  useEffect(() => {
    const publicationsData = fetchAllPublications();
    publicationsData.then((response) => {
      setPageCount(Math.ceil(response.data.data.length / 9));
    });
  }, []);
  const handlePageChange = (e) => {
    const selectedPage = e.selected;
    const publicationDataInCurrentPage = fetchPublicationContentPagingate(selectedPage);
    publicationDataInCurrentPage.then(
      response => {
        const publicationsList = response.data.data.content;
        console.log(publicationsList)
        setProductList(publicationsList)
      }
    )
  }
  return (
    <div className={style.wrapperContent}>
      <div className={style.container}>
        {productList.map(
          (item) => (
            console.log(item.imgURL),
            (
              <div key={item.key}>
                <Card
                  imgSrc={item.imgURL}
                  name={item.publicationsName}
                  priceBeforeDiscount={item.unitPrice}
                  priceAfterDis
                  count={item.priceDis}
                />
              </div>
            )
          )
        )}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        // forcePage={pageOffset}
      />
    </div>
  );
}

export default Content;
