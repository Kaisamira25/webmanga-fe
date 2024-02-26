function BtnHeader({btnIcon}) {
    return ( 
        <button className="text-[1rem] bg-wrapper200 rounded-full h-11 w-11 flex justify-center items-center drop-shadow hover:bg-green500 transition-colors duration-300  ">
            {btnIcon}
        </button>
     );
}

export default BtnHeader;