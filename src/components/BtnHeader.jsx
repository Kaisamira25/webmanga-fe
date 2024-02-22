function BtnHeader({btnIcon}) {
    return ( 
        <button className="text-[1rem] bg-white rounded-full h-11 w-11 flex justify-center items-center drop-shadow bg-gradient-to-r from-[#ecf3f3] to-[#d0dfd8] hover:from-[#d0dfd8] hover:to-[#ecf3f3] ">
            {btnIcon}
        </button>
     );
}

export default BtnHeader;