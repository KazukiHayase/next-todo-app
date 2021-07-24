import {
  ApolloClient as ApolloClientBase,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

export class ApolloClient extends ApolloClientBase<Record<string, unknown>> {
  // シングルトンのインスタンス
  private static _instance: ApolloClient;

  private static httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  });

  // シングルトンインスタンスを取得
  public static get instance(): ApolloClient {
    if (!ApolloClient._instance) {
      this._instance = new ApolloClient({
        cache: new InMemoryCache(),
        link: ApolloClient.httpLink,
      });
    }
    return ApolloClient._instance;
  }
}
