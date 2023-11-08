import burguerMenu from '../assets/images/icon-menu.svg'

export const NavBar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[540px] sm:place-content-around sm:text-base sm:items-center ">
        <li><a href="#">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categorias</a></li>        
    </ul>
    <img className='w-8 h-4 cursor-pointer sm:hidden' src={burguerMenu} alt="Menu hamburguesa logo" />

</>

  )
}

