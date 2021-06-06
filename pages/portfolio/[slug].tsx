import { pfData } from "../../components/portfolio/pfData";
import { IoArrowUndoOutline, IoLogoGithub } from "react-icons/io5";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function PortfolioItem({ title, blurb, goal, image, languages, link, notes, github }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/portfolio")
  }

  return (
    <div className="h-auto lg:mx-32 mx-10">

      <h1 className="mt-20 mb-10 md:my-20 text-orange underline text-4xl md:text-6xl lg:text-8xl font-bold">{title}</h1>

      <h3 className="text-md md:text-3xl text-white mb-16 leading-loose">{blurb}</h3>
      <p className="text-2xl lg:text-3xl text-green mb-20">Technology used: <span className="block md:inline mt-2 mb:mt-0">{languages}</span> </p>
      <div className="flex flex-col mb-10">
        <h3 className="text-2xl lg:text-3xl text-white font-bold mb-5">The Goal:</h3>
        <p className="text-xl text-white leading-loose mb-10">{goal}</p>
        <h3 className="text-2xl lg:text-3xl text-white font-bold mb-5">Ny Notes:</h3>
        <p className="text-xl text-white leading-loose">{notes}</p>
      </div>

      <div className="flex flex-col-reverse md:flex-row mb-20">
        <button onClick={handleClick} className=" border border-green text-green px-5 py-3 mr-5"><IoArrowUndoOutline className="inline mb-1" /> Go Back</button>
        <Link href={link}>
          <a target="_blank" rel="noopener noreferrer" className="mb-5 md:mb-0 text-center border border-orange text-orange px-5 py-3 mr-5">Visit Live Site</a>
        </Link>
        <Link href={github}>
          <a target="_blank" rel="noopener noreferrer" className="mb-5 md:mb-0 text-center border border-orange text-orange px-5 py-3 mr-5">
            View on  <IoLogoGithub className="inline text-2xl mb-1" />
          </a>
        </Link>
      </div>

      <div className="flex w-full mb-20">
        <img src={image} alt={title} className="mb-10" />
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: pfData.find((item) => item.slug === params.slug),
  }
}

export async function getStaticPaths() {

  return {
    paths: pfData.map((item) => ({
      params: {
        slug: item.slug,
      }
    })),
    fallback: false,
  };
}