import ContactForm from "./ContactForm";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"


export default function Contact() {
  return (
    <div className="h-auto mt-20 mb-20" id="contact">
      <h2 className="text-green text-5xl md:text-8xl mb-8 md:mb-16 font-bold">.contact(<span className="text-white">&#123;&#125;</span>)</h2>
      <div className="flex flex-col md:flex-row justify-evenly ml-8 md:ml-16">
        <div className="w-full md:w-1/2">
          <p className="text-2xl lg:text-4xl text-white w-full md:w-90 leading-loose mb-5">Want To work together?</p>
          <p className="text-2xl lg:text-3xl text-white w-full md:w-90 mb-10">Shoot me an email!</p>
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-2xl lg:text-4xl text-white w-full md:w-90 leading-loose mb-5 mt-20 md:mt-0">Want to see more of me?</p>
          <p className="text-xl lg:text-3xl text-white w-full md:w-90 mb-10">Check out my social media:</p>
          <div className="flex gap-7 mt-5 text-5xl">
            <a href="https://www.linkedin.com/in/sander-trolleboe-byrkjeland/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="inline text-orange" />
            </a>
            <a href="https://github.com/Sander-TB" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="inline text-orange" /></a>
            <a href="https://www.instagram.com/sandertrolleboe/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="inline text-orange" /></a>
            <a href="https://twitter.com/STrolleb" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="inline text-orange" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
