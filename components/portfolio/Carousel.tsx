import Link from "next/link"
import { useState } from "react"
import { pfData } from "./pfData"
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi"
import { FiCircle } from "react-icons/fi"
import { FaCircle } from "react-icons/fa"

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }
  return (
    <div>
      {pfData.map((slide, index) => {
        return (
          <div key={index} className={index === current ? "flex flex-col lg:flex-row lg:items-start lg:justify-center slide-active" : "flex flex-col lg:flex-row lg:items-start lg:justify-center slide"}>
            <div className="w-full lg:w-1/2">
              {index === current && (
                <img src={slide.image} alt={slide.title} />
              )}
            </div>
            <div className="w-full lg:w-1/2 lg:ml-10">
              {index === current && (
                <div className="w-full">
                  <h4 className="text-4xl lg:text-5xl font-bold text-green mb-5 mt-10 lg:mt-0">{slide.title}</h4>
                  <p className="text-2xl lg:text-3xl text-orange mb-5">{slide.languages}</p>
                  <p className="text-md md:text-xl text-white mb-10 lg:mb-20">{slide.slug}</p>
                  <div className="flex flex-row w-full justify-items-center items-center">
                    <Link href="#">
                      <a className="w-1/2 lg:w-1/3 text-center text-xl text-green border border-green px-5 py-2 mb-20">Read more</a>
                    </Link>
                    <Link href="#">
                      <a className="w-1/2 lg:w-1/3 text-center text-xl text-orange border border-orange px-5 py-2 mb-20 ml-5">Visit</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
      <div className="flex flex-row items-center justify-evenly mt-10 lg:mt-20">
        <HiArrowNarrowLeft onClick={prevSlide} className="inline text-4xl text-white cursor-pointer" />
        <div className="flex flex-row items-center justify-center text-green ">
          {current === 0 ? <FaCircle className="mr-1" /> : <FiCircle className="mr-1" />}
          {current === 1 ? <FaCircle className="mr-1" /> : <FiCircle className="mr-1" />}
          {current === 2 ? <FaCircle className="mr-1" /> : <FiCircle className="mr-1" />}
          {current === 3 ? <FaCircle className="mr-1" /> : <FiCircle className="mr-1" />}
          {current === 4 ? <FaCircle /> : <FiCircle />}
        </div>
        <HiArrowNarrowRight onClick={nextSlide} className="inline text-4xl text-white cursor-pointer" />
      </div>
    </div>
  )
}
