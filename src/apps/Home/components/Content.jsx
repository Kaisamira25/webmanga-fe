import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import ReactPaginate from "react-paginate";
import {
  fetchAllPublications,
  fetchPublicationContentPagingate,
} from "../../../services/Service";
import { useNavigate } from "react-router-dom";

function Content({
  publicationsList,
  pageCount,
  handlePageChange,
  publications,
  forcePage
}) {
  const navigate = useNavigate();

  const [cartList, setCartList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const handlePublicationId = (id) => {
    return navigate(`/detail/${id}`);
  };
  const handlePublicationGetId = (id) => {
    setCartList((prevCartList) => [...prevCartList, id]);
    navigate("/cart")
  };
  // useEffect(() => {
    
  // },[forcePage])
  return (
    <div className={style.wrapperContent}>
      <div className={style.container}>
        {publications.map((item, index) => (
          <div key={index}>
            <Card
              imgSrc={item.images[0].imageURL}
              name={item.publicationsName}
              priceBeforeDiscount={item.unitPrice}
              count={item.priceDis}
              onClickNavigate={handlePublicationId}
              onClickGetItem={handlePublicationGetId}
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
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageRangeDisplayed={5}
          onPageChange={(e) => handlePageChange(e)}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={forcePage}
        />
      </div>
    </div>
  );
}

export default Content;
