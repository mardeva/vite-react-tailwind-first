import imageMobile from '../assets/images/image-web-3-mobile.jpg';
import imageDesktop from '../assets/images/image-web-3-desktop.jpg';

export const MainArticle = () => {
    return (
        <section className='mb-12'>
            {/* para poner varias imagenes que irán variando de acuerdo a la resolucion de pantalla */}
            <picture>
                <source media="(max-width: 640px)" srcSet={imageMobile} />
                <source media="(min-width:641px)" srcSet={imageDesktop} />
                {/* con img especifico la Imagen por defecto */}
                <img src={imageMobile} alt="Imagen articulo principal" />
            </picture>
            <div className='sm:flex '>


                <div className='flex-1 py-6'>
                    <h2 className='text-[40px] sm:text-[58px] font-bold leading-none'>The Bright Future of Web 3.0?</h2>
                </div>

                <div className='flex-1 '>
                    <p className='text-[13px] sm:text-[15px] mb-10 pt-9'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</p>
                    <button className='bg-SoftRed w-[148px] uppercase rounded-sm py-3 px-5 text-OffWhite hover:bg-VeryDarkBlue '>Read more</button>
                </div>
            </div>
        </section>
    );
}



