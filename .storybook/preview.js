import { MockedProvider } from '@apollo/client/testing';
import { RouterContext } from "next/dist/next-server/lib/router-context";
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
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  }
}
