function BtnHeader({iconName}) {
    return ( 
        <button className='bg-gradient-to-l from-[#e2e4e3] to-[#f4f5f4] hover:bg-gradient-to-r hover:from-[#DCEFE5] hover:to-[#a5eece] drop-shadow-md w-11 h-11 rounded-full flex items-center justify-center'>
            {iconName}
        </button>
     );
}

export default BtnHeader;