import Head from 'next/head'
import { GloblStyle } from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
      </Head>
      <GloblStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
