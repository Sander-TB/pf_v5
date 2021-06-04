import { useState } from "react";
import { Link } from "react-scroll"
import { FaHamburger } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import Logo from "../../public/images/logo.svg"

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  let burgerBg;
  let burgerMenu;

  if (showMenu) {

    burgerMenu = (
      <div className='fixed top-0 left-0 bg-darkblue w-4/5 h-full z-50 shadow'>
        <div className='flex justify-center z-50 pt-10'>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={Logo} alt="logo" className="w-1/2 z-50" />
          </Link>
        </div>
        <div className='flex flex-col text-white mt-16 py-5 w-2/3 mx-auto h-auto z-50'>
          <li className="list-none pb-7">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              .me()
            </Link>
          </li>
          <li className="list-none pb-7">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              .about()
            </Link>
          </li>
          <li className="list-none pb-7">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              .portfolio()
            </Link>
          </li>
          <li className="list-none pb-7">
            <Link
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              .blog()
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              .contact()
            </Link>
          </li>
        </div>
      </div>
    );
    burgerBg = (
      <div
        className='fixed top-0 left-0 bg-black-t-70 w-full h-full z-50 cursor-pointer'
        onClick={() => setShowMenu(false)}></div>
    );
  }

  return (
    <nav className='bg-darkblue'>
      <div className='flex justify-end items-center'>
        <button
          className='text-right text-3xl md:hidden text-orange z-50 mr-5 mt-10'
          onClick={() => setShowMenu(!showMenu)}>

          {showMenu ? <GiHamburger /> : <FaHamburger />}

        </button>
        <div className='hidden md:flex w-3/4 justify-evenly z-50 mt-10 text-white'>
          <li className="list-none">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              me()
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="cursor-pointer"
            >
              .about()
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              className="cursor-pointer"
            >
              .portfolio()
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              .blog()
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
              className="cursor-pointer"
            >
              .contact()
            </Link>
          </li>
        </div>
      </div>
      {burgerBg}
      {burgerMenu}
    </nav>
  );
}
