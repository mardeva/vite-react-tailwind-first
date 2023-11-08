


export const Article = ({img, number, title, text}) => {
    return (
        <article className='flex h-[162px] md:w-[342px] md:flex-grow'>

            <div className='w-[100px] flex-none'>
                <img src={img} alt="" />
            </div>

            <div className='pl-6'>
                <p className=' text-GrayishBlue text-3xl font-bold mb-[18px] '>{number}</p>
                <h2 className='font-bold mb-[6px] hover:text-SoftRed cursor-pointer'>{title}</h2>
                <p className=' text-VeryDarkBlue text-[16px] '>{text}</p>
            </div>

        </article>

    );
}





