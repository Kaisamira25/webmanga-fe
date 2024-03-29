import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import ReactPaginate from "react-paginate";
import {
  fetchAllPublications,
  fetchPublicationContentPagingate,
} from "../../../services/Service";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(1);
  const [cartList, setCartList] = useState([]);
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Call api to get all publications in first page
  useEffect(() => {
    const getPublicationsFirstPage = async () => {
      setIsLoading(true);
      const response = await fetchPublicationContentPagingate(0);
      setPublications(response.data.data.content);
      setIsLoading(false);
    };
    getPublicationsFirstPage();
  }, [])
  useEffect(() => {
    const fetchAllPublicationsToSetPageCount = async () => {
      const response = await fetchAllPublications();
      if (response && response.data && response.data.data && Array.isArray(response.data.data)) {
        setPageCount(Math.ceil(response.data.data.length / 9));
      } else {
        console.log("Error pagecount not an integer: ",response)
      }
    }
    fetchAllPublicationsToSetPageCount();
  }, [])
  const handlePageChange = async (e) => {
    const selectedPage = e.selected;
    const fetchData = await fetchPublicationContentPagingate(selectedPage);
    setPublications(fetchData.data.data.content);
  };
  // console.log(publications[0].images[0].imageURL);

  const handlePublicationId = (id) => {
    return navigate(`/detail/${id}`);
  };
  const handlePublicationGetId = (id) => {
    setCartList((prevCartList) => [...prevCartList, id]);
  };
  return (
    <div className={style.wrapperContent}>
      <div className={style.container}>
        {isLoading ? (<p>Loading</p>) : publications.map((item, index) => (
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
