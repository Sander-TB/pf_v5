import { blogPosts } from "../../lib/data";

export default function BlogPost({ title, date, content }) {
  return (
    <div className="bg-black">
      <h1 className="text-orange text-center pt-10 text-5xl md:text-8xl lg:text-9xl mt-20 font-bold">{title}</h1>
      <div>{content}</div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: blogPosts.find((post) => post.slug === params.slug),
  }
}

export async function getStaticPaths() {

  return {
    paths: blogPosts.map((post) => ({
      params: {
        slug: post.slug,
      }
    })),
    fallback: false,
  };
}