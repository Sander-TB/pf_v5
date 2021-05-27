import ContactForm from "./ContactForm";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"


export default function Contact() {
  return (
    <div className="h-auto mb-20">
      <h2 className="text-green text-8xl mb-16 font-bold">.contact(<span className="text-white">&#123;&#125;</span>)</h2>
      <div className="flex justify-evenly ml-16">
        <div className="w-1/2">
          <p className="text-3xl text-white w-90 leading-loose">Want To work together?</p>
          <p className="text-3xl text-white w-90 mb-10">Shoot me an email!</p>
          <ContactForm />
        </div>
        <div className="w-1/2">
          <p className="text-3xl text-white w-90 leading-loose">Want to see more of me?</p>
          <p className="text-3xl text-white w-90 mb-10">Check out my social media:</p>
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
