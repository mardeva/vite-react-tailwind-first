
export const NewArticle = ({ title, text }) => {
    return (
        <article className="h-[140px] border-b-2 py-7 border-GrayishBlue last:border-none lg:h-[160px] lg:py-4">
            <h2 className=" cursor-pointer hover:text-SoftOrange font-semibold text-[20px] lg:text-xl xl:text-2xl">{title}</h2>
            <p className="text-[15px] lg:text-base">{text}</p>
        </article>
    );
};



