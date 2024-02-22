function BtnCard({btnIcon}) {
    return ( 
        <button className="bg-wrapper200 h-9 w-14 drop-shadow flex items-center justify-center rounded-lg hover:bg-green500 transition-colors duration-500">
            {btnIcon}
        </button>
     );
}

export default BtnCard;