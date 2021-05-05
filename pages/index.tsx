import Layout from "../components/layout/Layout";
import { FaDownload, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import { HiArrowDown, HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Layout>
        <section id="home" className="flex h-screen flex-col">
          <h1 className="text-green text-9xl mt-48 font-bold">.me(<span className="text-white">&#123;<span className="italic">Sander</span>&#125;</span>)</h1>
          <p className="text-white text-3xl pl-20 mt-7">Front-End Developer,</p>
          <p className="text-green text-3xl pl-20">Tech-Lover & Nerd</p>
          <HiArrowDown className="self-center mt-52 text-4xl text-white animate-bounce" />
        </section>

        <section id="about" className=" h-auto mb-10">
          <h2 className="text-green text-8xl mt-40 font-bold">.about(<span className="text-white">&#123;&#125;</span>)</h2>
          <p className="text-white text-xl w-75ch pl-15 mt-10 leading-relaxed">I am a Front-End Developer living in Oslo, Norway. I love to learn new things and figuring out how things work, and I often tend to get lost in my work.</p>
          <button className="ml-16 mt-10 border border-green text-green px-5 py-3">
            Download My Resumé <FaDownload className="inline relative -top-1" />
          </button>
          <div className="ml-15 mt-32 w-90 grid grid-rows-2 grid-flow-col gap-20">
            <div className="">
              <h4 className="text-3xl text-orange">Main Skills</h4>
              <p className=" text-xl w-90 pt-3 leading-loose text-white">HTML, CSS, Javascript, React, Next.js, Node.js.</p>
            </div>
            <div className="">
              <h4 className="text-3xl text-orange">Currently learning</h4>
              <p className=" text-xl w-90 pt-3 leading-loose text-white">Linux, MongoDB, Express, Cyber Security, Python, Docker, Typescript.</p>
            </div>
            <div className="">
              <h4 className="text-3xl text-orange">Passions</h4>
              <p className=" text-xl w-90 pt-3 leading-loose text-white">Computers, programming, Software development, Tech.</p>
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
        </section>

        <section id="portfolio" className="h-auto mb-44">
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
        </section>

        <section id="blog" className="h-auto mb-20">
          <h2 className="font-sans text-20xl ml-20 font-medium text-black-t-90">Blog</h2>
          <div className="grid grid-rows-2 grid-flow-col gap-20 relative -top-44 ml-12">
            <div>
              <h4 className="text-5xl font-medium text-orange font-sans tracking-wider">Post Heading</h4>
              <p className="text-3xl text-bluegray pt-2 mb-7">01-02-2021</p>
              <p className="text-xl tracking-wide font-sans text-white mb-12 w-50ch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam odio. Sunt velit corporis libero nulla. Vero odit laborum doloribus!</p>
              <Link href="#">
                <a className="border border-green text-green px-5 py-3">Read More</a>
              </Link>
            </div>
            <div>
              <h4 className="text-5xl font-medium text-orange font-sans tracking-wider">Post Heading</h4>
              <p className="text-3xl text-bluegray pt-2 mb-7">01-02-2021</p>
              <p className="text-xl tracking-wide font-sans text-white mb-12 w-50ch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam odio. Sunt velit corporis libero nulla. Vero odit laborum doloribus!</p>
              <Link href="#">
                <a className="border border-green text-green px-5 py-3">Read More</a>
              </Link>
            </div>
            <div>
              <h4 className="text-5xl font-medium text-orange font-sans tracking-wider">Post Heading</h4>
              <p className="text-3xl text-bluegray pt-2 mb-7">01-02-2021</p>
              <p className="text-xl tracking-wide font-sans text-white mb-12 w-50ch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam odio. Sunt velit corporis libero nulla. Vero odit laborum doloribus!</p>
              <Link href="#">
                <a className="border border-green text-green px-5 py-3">Read More</a>
              </Link>
            </div>
            <div>
              <h4 className="text-5xl font-medium text-orange font-sans tracking-wider">Post Heading</h4>
              <p className="text-3xl text-bluegray pt-2 mb-7">01-02-2021</p>
              <p className="text-xl tracking-wide font-sans text-white mb-12 w-50ch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam odio. Sunt velit corporis libero nulla. Vero odit laborum doloribus!</p>
              <Link href="#">
                <a className="border border-green text-green px-5 py-3">Read More</a>
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="h-auto mb-20">
          <h2 className="text-green text-8xl mt-40 mb-10 font-bold">.contact(<span className="text-white">&#123;&#125;</span>)</h2>
          <div className="flex justify-evenly ml-16">
            <div className="w-1/2">
              <p className="text-3xl text-white w-90 leading-loose">Want To work together?</p>
              <p className="text-3xl text-white w-90">Shoot me an email!</p>
              <form action="#"></form>
            </div>
            <div className="w-1/2">
              <p className="text-3xl text-white w-90 leading-loose">Want to see more of me?</p>
              <p className="text-3xl text-white w-90">Check out my social media:</p>
              <div className="flex gap-7 mt-5 text-5xl">
                <FaLinkedin className="inline text-orange" />
                <FaGithubSquare className="inline text-orange" />
                <FaInstagramSquare className="inline text-orange" />
                <FaTwitterSquare className="inline text-orange" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
