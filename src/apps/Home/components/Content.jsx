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
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const fetchPublicationsInContent = fetchPublicationContentPagingate(0);
    fetchPublicationsInContent.then((response) => {
      setProductList(response.data.data.content);
      console.log(productList);
    });
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
  const handlePublicationId = (id) => {
    console.log("Publications: ", id);
    setCartList((prevCartList) => [...prevCartList, id]);
  };
  useEffect(() => {
    console.log(cartList)
  }, [cartList]);
  return (
    <div className={style.wrapperContent}>
      <div className={style.container}>
        {productList.map((item, index) => (
          <div key={index}>
            <Card
              imgSrc={item.images[0].imageURL}
              name={item.publicationsName}
              priceBeforeDiscount={item.unitPrice}
              count={item.priceDis}
              onClickGetItem={handlePublicationId}
              id={item.publicationsID}
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
