import { HiArrowDown } from "react-icons/hi"


export default function Home() {

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-green text-5xl md:text-8xl lg:text-9xl mt-48 font-bold">.me(<span className="text-white">&#123;<span className="italic">Sander</span>&#125;</span>)</h1>
      <p className="text-white text-xl md:text-3xl pl-8 md:pl-16 lg:pl-20 mt-3 md:mt-7">Front-End Developer,</p>
      <p className="text-green text-xl md:text-3xl pl-8 md:pl-16 lg:pl-20">Tech-Lover & Nerd</p>
      <a href="#about" className="cursor-pointer self-center mt-52 z-50">
        <HiArrowDown className="text-4xl text-white animate-bounce" />
      </a>
    </div>
  )
}
