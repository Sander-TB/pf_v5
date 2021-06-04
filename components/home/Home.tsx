import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll"

export default function Home() {

  return (
    <div className="flex h-screen flex-col" id="home">
      <h1 className="text-green text-5xl md:text-8xl lg:text-9xl mt-48 font-bold">.me(<span className="text-white">&#123;<span className="italic">Sander</span>&#125;</span>)</h1>
      <p className="text-white text-xl md:text-3xl pl-8 md:pl-16 lg:pl-20 mt-3 md:mt-7">Front-End Developer,</p>
      <p className="text-green text-xl md:text-3xl pl-8 md:pl-16 lg:pl-20">Tech-Lover & Nerd</p>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer self-center mt-52 z-40"
      >
        <a>
          <HiArrowDown className="text-4xl text-white animate-bounce" />
        </a>
      </Link>
    </div>
  )
}
