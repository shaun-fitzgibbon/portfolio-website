import type { AppProps } from 'next/app'
import '@assets/styles/globals.css'
import { Layout } from '@components/common'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
