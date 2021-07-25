import * as nextRouter from 'next/router'

nextRouter.useRouter = () => ({
  route: "/",
  pathname: "/",
  query: { id: "1" },
  asPath: "",
  basePath: "",
  push: () => {},
  prefetch: () => new Promise((resolve, reject) => {}),
})
