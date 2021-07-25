import { MockedProvider } from '@apollo/client/testing';
import * as nextRouter from 'next/router'
import '../src/style/globals.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider
  }
}

nextRouter.useRouter = () => ({
  route: "/",
  pathname: "/",
  query: { categoryId: "1" },
  asPath: "",
  basePath: "",
  push: () => {},
  prefetch: () => new Promise((resolve, reject) => {}),
})
