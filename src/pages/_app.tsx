import type { AppProps } from 'next/app'
import '@assets/styles/globals.scss'
import { Head, Layout } from '@components/common'
import { UIProvider } from '@contexts/UIContext/UIContext'

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  )
}

export default MyApp
