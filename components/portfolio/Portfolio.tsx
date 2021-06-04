import Link from "next/link"
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi"
import { FiCircle } from "react-icons/fi"
import { FaCircle } from "react-icons/fa"
export default function Portfolio() {
  return (
    <div className="h-auto mb-44">
      <h2 className="text-green text-5xl md:text-7xl lg:text-8xl mt-56 mb-20 font-bold">.portfolio(<span className="text-white">5</span>)</h2>
      <div className="flex flex-col md:flex-row gap-16">
        <HiArrowNarrowLeft className="hidden lg:block text-6xl relative top-52 text-white" />
        <img src="https://via.placeholder.com/600x350" alt="" className="w-full md:w-1/2" />
        <div className="">
          <h4 className="text-4xl font-bold text-green mb-5">Project Title</h4>
          <p className="text-2xl text-orange mb-5">HTML | CSS | Javascript</p>
          <p className="text-md md:text-xl text-white mb-10 md:mb-5">Small paragraph explaining project</p>
          <Link href="#">
            <a className="text-xl text-green border border-green px-5 py-2">Read more</a>
          </Link>
        </div>
        <HiArrowNarrowRight className="hidden lg:block text-6xl relative top-52 text-white" />
      </div>
      <div className="flex flex-row items-center justify-center text-orange lg:hidden mt-20 md:mt-10">
        <FaCircle />
        <FiCircle />
        <FiCircle />
      </div>
    </div>
  )
}
