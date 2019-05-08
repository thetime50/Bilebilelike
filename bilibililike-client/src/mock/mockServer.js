import Mock from "mockjs"
import data from "./data.json"

Mock.mock("/userinfo",{code:0, data: data.userinfo})
  