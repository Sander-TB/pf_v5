import Link from "next/link"
import { blogPosts } from "../../lib/data"
import { format, parseISO, add } from "date-fns"

export default function Blog() {


  //const url = "https://api.github.com/repos/sander-tb/posts"
  return (
    <div className="h-auto mb-10" id="blog">
      <h2 className="font-sans text-8xl md:text-20xl ml-8 md:ml-20 font-medium text-black-t-90">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative -top-20 md:-top-44 ml-10 md:ml-12">
        {
          blogPosts.map((post) => (
            <div key={post.slug}>
              <h4 className="text-3xl font-medium text-orange font-sans tracking-wider">{post.title}</h4>
              <p className="text-2xl font-mono text-bluegray pt-2 mb-7">{format(parseISO(post.date), 'MMMM, do uuu')}</p>
              <p className="text-xl tracking-wide font-sans text-white mb-12 w-90 lg:w-50ch">{post.content}</p>
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
