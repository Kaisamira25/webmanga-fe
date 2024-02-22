import BtnCard from "./BtnCard";
import CartIcon from '../assets/icons/CartIcon'
import EyeIcon from '../assets/icons/EyeIcon'
function Card({
  avatarCard,
  bookName,
  bookPrice,
  priceStyle,
  discountPercent,
  summary
}) {
  return (
    <div className="rounded w-80 flex flex-wrap p-1 drop-shadow bg-white100">
      <div className="basis-1/2">
        <img src={avatarCard} alt="" />
      </div>
      <div className="information basis-1/2 pl-2 relative">
        <a href="/" className="font-bold text-xl">
          {bookName}
        </a>
        <div className="price flex gap-3 flex-wrap mt-4">
          <p className={`${priceStyle} price text-sm`}>{bookPrice}</p>
          <span className="text-sm">{discountPercent}</span>
          <span className="text-sm">50.000 VND</span>
        </div>
        <div className="btn flex gap-5 absolute bottom-0">
          <BtnCard btnIcon={<CartIcon/>}/>
          <BtnCard btnIcon={<EyeIcon/>}/>
        </div>
      </div>
      <div className="mt-5 line-clamp-3  px-1 hover:line-clamp-none">
        <p>
          {summary}
        </p>
      </div>
    </div>
  );
}

export default Card;
