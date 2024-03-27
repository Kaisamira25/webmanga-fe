import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import ReactPaginate from "react-paginate";
import {
  fetchAllPublications,
  fetchPublicationContentPagingate,
} from "../../../services/Service";

function Content() {
  const [productList, setProductList] = useState([]);
  const [pageCount, setPageCount] = useState(() => {
    const publicationData = fetchAllPublications();
    publicationData.then((response) => {
      setPageCount(Math.ceil(response.data.data.length / 9));
    });
  });
  // const [publicationList, setPublicationsList] = useState([]);

  useEffect(() => {
    const fetchPublicationsInContent = fetchPublicationContentPagingate(0);
    fetchPublicationsInContent.then((response) => {
      setProductList(response.data.data.content);
    });
    // tính số trang
      // const publicationsData = fetchAllPublications();
      // publicationsData.then((response) => {
      //   setPageCount(Math.ceil(response.data.data.length / 9));
      // });
  }, []);

  const handlePageChange = (e) => {
    const selectedPage = e.selected;
    const publicationDataInCurrentPage =
      fetchPublicationContentPagingate(selectedPage);
    publicationDataInCurrentPage.then((response) => {
      const publicationsList = response.data.data.content;
      setProductList(publicationsList);
    });
  };

  return (
    <div className={style.wrapperContent}>
      <div className={style.container}>
        {productList.map((item, index) => (
          <div key={index}>
            <Card
              imgSrc={item.imageURL}
              name={item.publicationsName}
              priceBeforeDiscount={item.unitPrice}
              priceAfterDis
              count={item.priceDis}
            />
          </div>
        ))}
      </div>
      <div>
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
    </div>
  );
}

export default Content;
