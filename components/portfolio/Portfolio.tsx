import Carousel from "./Carousel"
import { pfData } from "./pfData"

export default function Portfolio() {
  return (
    <div className="h-auto mb-44">
      <h2 className="text-green text-5xl md:text-7xl lg:text-8xl mt-56 mb-32 font-bold">.portfolio(<span className="text-white">5</span>)</h2>
      <Carousel slides={pfData} />
    </div>
  )
}
