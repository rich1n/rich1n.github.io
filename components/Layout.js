import Head from "next/head"
import Footer from "./Footer"
import DarkMode from "./DarkMode"
import Link from "next/link"
import NavLinks from "../data/NavLinks"

export default function Layout({ children, title = '', titulo = '', description = '', home }) {
  return (
		<>
			<div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
				<Head>
					<title>
						{title}
					</title>
					<meta 
						name="description"
						content={description} 
						/>
					<link 
						rel="icon" 
						href="/favicon.ico" 
						/>
				</Head>
				<div className="mt-8 flex items-center justify-center text-base leading-5">
					<div className="hidden sm:block">
						{NavLinks.map((link) => (
							<Link
								key={link.title}
								href={link.href}
								className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
							>
								{link.title}
							</Link>
						))}
					</div>
					<DarkMode />
				</div>
				<main className="mb-auto">
					{children}
				</main>
        <Footer />
			</div>
		</>
	)
}
