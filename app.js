const express = require("express")
const app = express()
const route = require("./router/route")
const flash = require('connect-flash')
const mongoose = require("mongoose")
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/Taskmanager")
.then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("database connection failed")
});




//middleware
app.use(flash())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//static page rendering
app.use(express.static("public/"))

//dynamic page rendering
app.set("view engine", "ejs");
app.set("views", "./views");

//routes
app.use('/',route)



const port= 4000

app.listen(port,()=>{
    console.log(`server running in ${port} port`)
})