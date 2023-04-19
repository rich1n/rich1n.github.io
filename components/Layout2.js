import Head from "next/head"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import Sidebar2 from "./Sidebar2"
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

                <div className="w-14 sticky">
                    <Sidebar2 />
                </div>
				 	<Spacer />
					<main className="w-full">{children}</main>
				<Footer />
		</>
	)
}
