import { FaDownload } from "react-icons/fa"

export default function AboutPage() {
  return (
    <div className=" h-auto mb-10" id="about">
      <div className="flex flex-col md:flex-row">
        <section className="w-full md:w-2/3">
          <h2 className="text-green xs:text-4xl text-5xl md:text-8xl lg:text-9xl mt-32 md:mt-44 font-bold">.about(
            <span className="text-white">&#123;&#125;</span>)
          </h2>
          <p className="text-white text-lg md:text-xl w-90 md:w-50ch lg:w-60ch pl-8 md:pl-15 mt-10 leading-loose">I am a Front-End Developer living in Oslo, Norway. I love to learn new things and figuring out how things work, and I often tend to get lost in my work.</p>

          <a href="CV_sander_trollebø.pdf" download="CV_sander_trollebø.pdf">
            <button className="ml-8 md:ml-16 mt-10 border border-green text-green px-5 py-3">
              Download My Resumé <FaDownload className="inline relative -top-1" />
            </button>
          </a>
        </section>
        <aside className="hidden md:flex w-1/4 mt-32">
          <div className="">
            <img src="https://res.cloudinary.com/dfhcrdprn/image/upload/v1623008888/portfolio/sander_aojew1.png" alt="Sander Trollebø" />
          </div>
        </aside>
      </div>

      <div className="ml-8 md:ml-15 mt-32 w-90 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="">
          <h4 className="text-3xl text-orange">Main Skills</h4>
          <p className=" text-xl w-90 pt-3 leading-loose text-white">HTML, CSS, Javascript, React, Next.js, Node.js.</p>
        </div>
        <div className="">
          <h4 className="text-3xl text-orange">Currently learning</h4>
          <p className=" text-xl w-90 pt-3 leading-loose text-white">Linux, MongoDB, Express, Cyber-Security, Python, Docker, Typescript.</p>
        </div>
        <div className="">
          <h4 className="text-3xl text-orange">Passions</h4>
          <p className=" text-xl w-90 pt-3 leading-loose text-white">Computers, programming, Software development, Gaming</p>
        </div>
        <div className="">
          <h4 className="text-3xl text-orange">Personal Traits</h4>
          <p className=" text-xl w-90 pt-3 leading-loose text-white break-words">Silly, optimistic, hard-working, independent, <span className="font-bold">Eager to learn</span>.</p>
        </div>
        <div className="">
          <h4 className="text-3xl text-orange">Favorite Quotes</h4>
          <p className=" text-xl w-90 font-bold italic pt-3 pb-10 text-white">“Practice reckless optimism.”</p>
          <p className=" text-xl w-90 font-bold italic text-white">“Life is trying things to see if they work.”</p>
        </div>
      </div>
    </div>
  )
}
