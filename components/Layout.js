import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

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
				<Header />
				<main className="mb-auto">
					{children}
				</main>
        <Footer />
			</div>
		</>
	)
}
