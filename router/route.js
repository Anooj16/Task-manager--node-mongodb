const express = require("express")
const route = express()
const controller = require("../controller/controller")






route.get("/",controller.loadHome)
route.post("/submit",controller.addList)





















module.exports= route