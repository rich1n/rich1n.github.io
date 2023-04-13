import Head from "next/head"
import Footer from "./layouts/Footer"
import NavLinks from "../data/NavLinks"
import Sidebar from "./layouts/Sidebar"

export default function Layout({ children, title = '', titulo = '', description = '', home }) {
  return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} key="desc" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
				{/**
				 * Sidebar + Main Section
				 */}
			<div className="mx-auto px-4 sm:px-6 xl:max-w-7xl xl:px-0">
				<div className="flex">
					<Sidebar />
					<main className="w-full">{children}</main>
				</div>
				<hr className="my-4"/>
				<Footer />
			</div>
		</>
	)
}
