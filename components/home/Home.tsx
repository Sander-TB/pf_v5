import BgAnimation from "../animations/BgAnimation";


export default function Home() {

  return (
    <div className="flex flex-col ml-10 md:ml-20 lg:ml-0 h-95vh" id="home">
      <h1 className="text-green text-5xl md:text-7xl lg:text-9xl mt-32 md:mt-48 font-bold">.me(<span className="text-white">&#123;<span className="italic">Sander</span>&#125;</span>)</h1>
      <p className="text-white text-xl md:text-3xl pl-8 md:pl-10 lg:pl-20 mt-3 md:mt-7">Front-End Developer,</p>
      <p className="text-green text-xl md:text-3xl pl-8 md:pl-10 lg:pl-20">Tech-Lover & Nerd</p>
      <div className="mt-20 w-2/3 md:w-1/2 lg:hidden self-center md:self-start md:ml-20 lg:self-end lg:mr-32">
        <img src="https://res.cloudinary.com/dfhcrdprn/image/upload/v1623016004/portfolio/sander_aojew1.png" alt="Sander Trollebø" />
      </div>
      <BgAnimation />
    </div>
  )
}
