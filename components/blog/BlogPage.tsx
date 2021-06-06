import Link from "next/link"
import { blogPosts } from "../../lib/data"
import { format, parseISO } from "date-fns"

export default function Blog() {


  //const url = "https://api.github.com/repos/sander-tb/posts"
  return (
    <div className="h-auto mb-10" id="blog">
      <p className="bg-white text-center mt-5">This Page is Currently Under Construction</p>
      <h2 className="font-sans mt-10 text-9xl md:text-20xl ml-8 md:ml-20 font-bold text-black-t-90">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative mt-10 md:mt-0 md:-top-32 ml-10 md:ml-12">
        {
          blogPosts.map((post) => (
            <div key={post.slug} className="mb-10">
              <h4 className="text-3xl font-bold text-orange font-sans tracking-wider">{post.title}</h4>
              <p className="text-2xl font-mono text-bluegray pt-2 mb-7">{format(parseISO(post.date), 'MMMM, do uuu')}</p>
              <p className="text-xl tracking-widest font-sans font-light text-white mb-12 w-90 lg:w-50ch">{post.content}</p>
              <Link href={`/blog/${post.slug}`}>
                <a className="font-sans border border-green text-green px-5 py-3">Read More</a>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
