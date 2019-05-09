import Mock from "mockjs"
import server from "./mockServer.js"

Mock.mock("/userinfo",{code:0, data: server.userinfo()})
  