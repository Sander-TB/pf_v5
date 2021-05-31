import Layout from "../components/layout/Layout";
import Contact from "../components/contact/Contact"
import Blog from "../components/blog/Blog"
import Portfolio from "../components/portfolio/Portfolio"
import About from "../components/about/About";
import Home from "../components/home/Home";
import Banner from "../components/banner/Banner";


export default function App() {
  return (
    <>
      <Banner />
      <Layout>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </Layout>
    </>
  )
}
