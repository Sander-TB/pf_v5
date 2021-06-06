import { useState } from "react";
import Link from "next/link"
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
            href="/"
          >
            <a><img src={Logo} alt="logo" className="w-1/2 z-50" /></a>
          </Link>
        </div>
        <div className='flex flex-col text-white mt-16 py-5 w-2/3 mx-auto h-auto z-50'>
          <li className="list-none pb-7">
            <Link
              href="/"
            >
              <a onClick={() => setShowMenu(false)}>
                .me()
              </a>
            </Link>
          </li>
          <li className="list-none pb-7">
            <Link
              href="/about"
            > <a onClick={() => setShowMenu(false)}>
                .about()
              </a>

            </Link>
          </li>
          <li className="list-none pb-7">
            <Link
              href="/portfolio"
            >
              <a onClick={() => setShowMenu(false)}>
                .portfolio()
              </a>

            </Link>
          </li>
          <li className="list-none pb-7">
            <Link
              href="/blog">
              <a onClick={() => setShowMenu(false)}>.blog()</a>
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/contact">
              <a onClick={() => setShowMenu(false)}>.contact()</a>
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
              href="/">
              <a className="cursor-pointer">me()</a>
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/about">
              <a className="cursor-pointer">.about()</a>
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/portfolio">
              <a className="cursor-pointer">.portfolio()</a>
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/blog">
              <a className="cursor-pointer">.blog()</a>
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/contact">
              <a className="cursor-pointer"> .contact()</a>
            </Link>
          </li>
        </div>
      </div>
      {burgerBg}
      {burgerMenu}
    </nav>
  );
}
