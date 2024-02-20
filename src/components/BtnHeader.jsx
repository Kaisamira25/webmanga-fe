function BtnHeader({btnIcon}) {
    return ( 
        <button className="rounded-full drop-shadow-md bg-gradient-to-r from-white50 to-white100 p-2 hover:from-white100 hover:to-background400 transition-colors duration-300">
            {btnIcon}
        </button>
     );
}

export default BtnHeader;