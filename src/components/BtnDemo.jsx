function BtnHeader({iconName}) {
    return ( 
        <button className='bg-gradient-to-r from-[#ffffff] to-[#d4d4d4] hover:bg-gradient-to-r hover:from-[#DCEFE5] hover:via-[#BCDECE] hover:to-[#8FC6AF] drop-shadow-md w-11 h-11 rounded-full flex items-center justify-center'>
            {iconName}
        </button>
     );
}

export default BtnHeader;