import { HiArrowDown } from "react-icons/hi"


export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-green text-9xl mt-48 font-bold">.me(<span className="text-white">&#123;<span className="italic">Sander</span>&#125;</span>)</h1>
      <p className="text-white text-3xl pl-20 mt-7">Front-End Developer,</p>
      <p className="text-green text-3xl pl-20">Tech-Lover & Nerd</p>
      <HiArrowDown className="self-center mt-52 text-4xl text-white animate-bounce" />
    </div>
  )
}
