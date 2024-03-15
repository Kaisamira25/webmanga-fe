import style from "../scss/PublicationCard.module.scss";
import Info from "./InfoSquare";
import {useLocation} from 'react-router-dom';
import { useState } from "react";
function PublicationCard({publicationsStatus,priceBeforeDiscount,priceAfterDiscount,}) {
  // const categorieList = [
  //   { id: 1, name: "Light Novel" },
  //   { id: 2, name: "Fantasy" },
  //   { id: 3, name: "Manga - Comic" },
  //   { id: 4, name: "Detective" },
  //   { id: 5, name: "Action" },
  //   { id: 6, name: "Romance" },
  // ];
  const location = useLocation();
  const { id, name ,description,img,publishYear,publisher,categories,author} = location.state;
  const Nlistproduct = {
    "id": id,
    "name": name,
    "description": description,
    "img": img,
    "publishYear":publishYear,
    "publisher": publisher,
    "categories" : categories,
    "author":author
  }
  const listproduct = [];
  listproduct.push(Nlistproduct);
console.log(listproduct);
  const [quantity, setQuantity] = useState(0);
  const handleDecreaseQuantity = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
   
    <div className={style.wrapper}>
      <div className={style.imgWrapper}>
      {listproduct.map((item) => (
        <div>
       
        <img src={item.img} alt="" />
       
          <p className={style.status}>{publicationsStatus}</p>
        </div>
         ))}
      </div>
      {listproduct.map((item) => (
      <div className={style.publicationInfo}>
    
        <p className={style.name}>{item.name}</p>
    
        <div className={style.infoPublications}>
          <div className={style.price}>
            <span>{priceBeforeDiscount}</span>
            <span>{priceAfterDiscount}</span>
          </div>
          <div className={style.info}>
            <div>
              <div>
                <Info label={"Tên tác giả:"} content={" " +item.author} />
              </div>
              <div>
                <Info label={"Nhà xuất bản:"} content={" " +item.publisher} />
              </div>
            </div>
            <div>
              <div>
                <Info label={"Loại:"} content={ " " +item.categories.join(', ')} />
              </div>
              <div>
                <Info label={"Năm xuất bản:"} content={" " +item.publishYear} />
              </div>
            </div>
          </div>
        </div>

        <div className={style.decription}>
          <label htmlFor="">Nội dung</label>
         
        <p >{item.description}</p>
    
        </div>
        
        <div className={style.categories}>
       
        {item.categories.map((category, index) => (
            <a key={index} href="/" style={{ marginRight: '5px' }}>
              {category}
            </a>
          ))}
        </div>
        <div className={style.type}>
          <select name="type" id="">
            <option value="special">Bản đặc biệt</option>
            <option value="normal">Bản thường</option>
          </select>
        </div>
        <div className={style.quantity}>
          <div className="quantity">
            <button onClick={handleDecreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
          <div className="addCart">
            <button>Thêm vào giỏ</button>
          </div>
        </div>
      </div>
          ))}
    </div>
  );
}

export default PublicationCard;
