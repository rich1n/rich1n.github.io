/*import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      </ThemeProvider>

*/

import Head from 'next/head'
import '@/styles/globals.css'
//import siteMetadata from '@/data/siteMetadata'
//import { ThemeProvider } from 'next-themes'
//import Analytics from '@/components/analytics'
import Layout from '@/components/Layout'
//import { ClientReload } from '@/components/ClientReload'
//const isDevelopment = process.env.NODE_ENV === 'development'
//const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}
