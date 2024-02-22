function Card({avatarCard,bookName}) {
    return ( 
        <div className="bg-red-400 rounded w-80 h-96">
            <div className="w-1/2">
                <img src={avatarCard} alt="" />
            </div>
            <div className="info">
                <p>{bookName}</p>
            </div>
        </div>
     );
}

export default Card;