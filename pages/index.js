import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { locale } = useRouter();
	const defaultLang = locale === 'es'

  return (
    <>
      <Head>
        <title>Richin Portfolio Page?</title>
      </Head>

        <main>
          <div className='container mt-12'>
            <h1 className='text-3xl text-center text-red-400'>
              Rich1n.com
            </h1>
          </div>
          <section>
            <div>

            </div>
          </section>
        </main>
    </>
  )
}
