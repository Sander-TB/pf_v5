import Link from "next/link"

export default function Blog() {
  return (
    <div className="h-auto mb-10">
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
    </div>
  )
}