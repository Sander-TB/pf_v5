import BgAnimation from "../animations/BgAnimation";


export default function Home() {

  return (
    <div className="flex md:ml-0 flex-col h-95vh" id="home">
      <h1 className="text-green text-6xl md:text-8xl lg:text-9xl mt-32 md:mt-48 font-bold">.me(<span className="text-white">&#123;<span className="italic">Sander</span>&#125;</span>)</h1>
      <p className="text-white text-xl md:text-3xl pl-8 md:pl-16 lg:pl-20 mt-3 md:mt-7">Front-End Developer,</p>
      <p className="text-green text-xl md:text-3xl pl-8 md:pl-16 lg:pl-20">Tech-Lover & Nerd</p>
      <div className="flex md:hidden w-2/3 self-center">
        <img src="https://res.cloudinary.com/dfhcrdprn/image/upload/v1623008888/portfolio/sander_aojew1.png" alt="Sander Trollebø" />
      </div>
      <BgAnimation />
    </div>
  )
}
