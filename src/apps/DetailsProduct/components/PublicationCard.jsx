import style from "../scss/PublicationCard.module.scss";
import Info from "./InfoSquare";

function PublicationCard({
  imgUrl,
  stock,
  genres,
  author,
  publisher,
  types,
  publicationsYear,
  publicationsName,
  discountPrice,
  unitPrice,
  summary,
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleAddToCart
}) {
  return (
    <div className={style.wrapper}>
      <div className={style.imageAndInfo}>
        <div className={style.imageZone}>
          <div className={style.imgWrapper}>
            <div>
              <img src={imgUrl} alt="" />
              <p className={style.status}>
                {stock < 0 ? "Out stock" : "In stock"}
              </p>
            </div>
          </div>
          <div>
            <div className={style.categories}>
              {genres.map((item, index) => (
                <a key={index}>{item}</a>
              ))}
            </div>
          </div>
        </div>
        <div className={style.publicationInfo}>
          <p className={style.name}>{publicationsName}</p>
          <div className={style.infoPublications}>
            <div className={style.price}>
              <span
                className={
                  discountPrice == null ? style.hiddenPrice : style.defaultPrice
                }
              >
                {discountPrice}
                <span>đ</span>
              </span>
              <span>
                {unitPrice}
                <span>đ</span>
              </span>
            </div>
            <div className={style.info}>
              <div>
                <div>
                  <Info label={"Author: "} content={author} />
                </div>
                <div>
                  <Info
                    label={"Publisher: "}
                    content={publisher}
                  />
                </div>
              </div>
              <div>
                <div>
                  <Info label={"Type: "} content={types} />
                </div>
                <div>
                  <Info
                    label={"Release Date: "}
                    content={publicationsYear}
                  />
                </div>
              </div>
              <div className={style.type}>
                <select name="type" id="">
                  <option value="Special">Special</option>
                  <option value="Regular">Regular</option>
                </select>
              </div>
            </div>
            <div className={style.description}>
              <label htmlFor="">Summary</label>
              <p>{summary}</p>
            </div>
          </div>

          <div className={style.type}>
            <select name="type" id="">
              <option value="Special">Special</option>
              <option value="Regular">Regular</option>
            </select>
          </div>
          <div className={style.quantity}>
            <div className="quantity">
              <button onClick={() => handleDecreaseQuantity()}>-</button>
              <p>{quantity}</p>
              <button onClick={() => handleIncreaseQuantity()}>+</button>
            </div>
            <div className="addCart">
              <button onClick={() => handleAddToCart()}>Thêm vào giỏ</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.description}>
        <label htmlFor="">Summary</label>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default PublicationCard;
