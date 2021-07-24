import 'src/style/globals.scss'
import { Header } from '@/components/organisms/header'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}
export default MyApp
