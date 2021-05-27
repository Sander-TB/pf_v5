import Link from "next/link"
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi"

export default function Portfolio() {
  return (
    <div className="h-auto mb-44">
      <h2 className="text-green text-8xl mt-56 mb-20 font-bold">.portfolio(<span className="text-white">5</span>)</h2>
      <div className="flex gap-16">
        <HiArrowNarrowLeft className="text-6xl relative top-52 text-white" />
        <img src="https://via.placeholder.com/600x350" alt="" />
        <div className="">
          <h4 className="text-4xl font-bold text-green mb-5">Project Title</h4>
          <p className="text-2xl text-orange mb-5">HTML | CSS | Javascript</p>
          <p className="text-xl text-white mb-5">Small paragraph explaining project</p>
          <Link href="#">
            <a className="text-xl text-white underline">Read more</a>
          </Link>
        </div>
        <HiArrowNarrowRight className="text-6xl relative top-52 text-white" />
      </div>
    </div>
  )
}
