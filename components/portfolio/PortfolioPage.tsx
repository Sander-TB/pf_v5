import Link from "next/link"
import { pfData } from "./pfData"

export default function Portfolio() {
  console.log(pfData);

  return (
    <div className="flex flex-col">
      <h2 className="text-green text-6xl md:text-7xl lg:text-9xl mt-48 mb-44 font-bold">.portfolio(<span className="text-white">5</span>)</h2>
      <div className="flex flex-col">
        {
          pfData.map((project) => {
            return (
              <div key={project.id} className="flex mb-32">
                <div className="w-1/2">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="ml-20 w-1/2">
                  <h2 className="text-4xl lg:text-5xl font-bold text-orange mb-5 mt-10 lg:mt-0">{project.title}</h2>
                  <p className="text-2xl lg:text-3xl text-green mb-5">{project.languages}</p>
                  <p className="text-md md:text-xl text-white mb-16 leading-loose">{project.slug}</p>
                  <div className="flex flex-row w-full justify-items-center items-center">
                    <Link href="#">
                      <a className="w-1/2 lg:w-1/3 text-center text-xl text-green border border-green px-5 py-2 mb-20">Read More</a>
                    </Link>
                    <Link href={project.link}>
                      <a target="_blank" rel="noopener noreferrer" className="w-1/2 lg:w-1/3 text-center text-xl text-orange border border-orange px-5 py-2 mb-20 ml-5">Visit</a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}