import Head from 'next/head'
import '@/styles/globals.css'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout'

//import Analytics from '@/components/analytics'
//import { ClientReload } from '@/components/ClientReload'
//const isDevelopment = process.env.NODE_ENV === 'development'
//const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
