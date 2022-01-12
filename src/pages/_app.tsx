import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import 'assets/styles/globals.scss'
import { Head, Layout } from 'components'
import { UIProvider } from 'contexts'

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider defaultTheme="system">
        <Head />
        <UIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UIProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
