import Navbar from "../navigation/Navbar";
import NextHead from "../head/Head";

export default function Layout({ children }) {
	return (
		<main className="px-5 md:px-10 lg:px-100 bg-darkblue">
			<NextHead
				title="Sander's Portfolio"
				description='My personal portfolio as a Front End Developer'
				author='Sander Trollebø'
				keywords='Next.js, React, Developer, Front-End, Tech, Apps, Web applications, responsive, Tailwind, Javascript, Typescript'
			/>
			<Navbar />
			<div className='bg-darkblue'>
				<div className="animation-area h-auto overflow-hidden">
					{children}
				</div>
			</div>
		</main>
	);
}
