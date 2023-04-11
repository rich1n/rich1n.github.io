import Head from "next/head"
import Footer from "./Footer"
import Link from "next/link"
import NavLinks from "../data/NavLinks"
import Sidebar from "./Sidebar"

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
				<div className="flex">
					<Sidebar />
					<main className="w-full">
						{children}
					</main>
				</div>
		
		        <Footer />
			</div>
		</>
	)
}
