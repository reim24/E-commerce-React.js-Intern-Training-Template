import jsonServer from "json-server"
import path from "path"
import middlewares from "./middlewares"

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, "db.json"))

;(server as any).db = router.db
server.use(middlewares)

server.use(router)
server.listen(3050, () => {
  console.log("Server listening on port 3050")
})
