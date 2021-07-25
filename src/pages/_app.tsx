import 'src/style/globals.scss'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '../utilities/apollo/client';
import { Header } from '@/components/organisms/header'
import { Sidebar } from '@/components/organisms/sidebar'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={ApolloClient.instance}>
      <Header />
      <div className='root'>
        <Sidebar />
        <div className='main'>
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  )
}
export default MyApp
