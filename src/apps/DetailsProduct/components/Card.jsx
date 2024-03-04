import style from '../scss/Card.module.scss'
function Card({imgUrl,name,beforeDiscount,afterDiscount}) {
    return ( 
        <article className='h-full'>
            <div className='h-5/6 flex justify-center'>
                <img className='h-full' src={imgUrl} alt="" />
            </div>
            <div className='h-1/6 text-wrap break-words font-semibold'>
                <p className='text-center'>{name}</p>
                <div className='flex justify-center gap-x-4'>
                    <span>{beforeDiscount}</span>
                    <span className='line-through'>{afterDiscount}</span>
                </div>
            </div>
        </article>
     );
}

export default Card;