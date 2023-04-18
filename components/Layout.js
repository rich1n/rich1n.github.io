import Head from "next/head"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import Sidebar from "./layouts/Sidebar"
import Spacer from "./layouts/Spacer"

export default function Layout({ children, title = '', description = '', home }) {
  return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
				{/**
				 * Sidebar + Main Section
				 */}
				<Header />				 
			<div className="mx-auto px-4 sm:px-6 xl:max-w-7xl xl:px-0">
				<div className="flex">
					<Sidebar />
				 	<Spacer />
					<main className="w-full">{children}</main>
				</div>
				<Footer />
			</div>
		</>
	)
}
