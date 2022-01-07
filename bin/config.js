export function createConfig(answer) {
  const haveMiddleware = (name) => {
    return answer.middleware.indexOf(name) !== -1
  }
  const inputConfig = {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      static: haveMiddleware('koa-static'),
      router: haveMiddleware('koa-router'),
      views: haveMiddleware("koa-views"),
      body: haveMiddleware("koa-body")
    }
  }
  return inputConfig
}