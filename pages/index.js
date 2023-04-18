import { Inter } from 'next/font/google'
import siteMetadata from '@/data/siteMetadata'
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"
import { PageSEO } from '@/components/SEO'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { locale } = useRouter();
	const defaultLang = locale === 'es'

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <main>
        <div className='container mt-12'>
          <h1 className='text-3xl text-center text-red-400'>
            Rich1n.com
          </h1>
        </div>
        <section className='flex mx-auto my-12'>
          <div className='flex mx-auto'>
            SECCIÓN
          </div>
        </section>
      </main>
    </>
  )
}
