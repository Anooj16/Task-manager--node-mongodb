const List = require('../model/listModel')
const mongoose = require('mongoose')






const loadHome= async (req,res)=>{
    try{
        let fullList= await List.find()
        res.render('home',{lists:fullList||""})


    }
    catch(err){
        console.log(err)
    }
}

const addList= async (req,res)=>{
    try{
        const newlist= req.body.inputField
        if(newlist){
            const list = await List.findOne({inputField:  { $regex: new RegExp(+"^" + newlist.toLowerCase(), "i") }})
            if(list){
                req.flash("message", "List Already Exist");
                res.redirect("/");
            }else{
                const list= new List({
                    _id:new mongoose.Types.ObjectId(),
                    inputField: req.body.inputField
                })
                var listdata = await list.save()
                if(listdata){
                    let fullList = await List.find()
                    res.render("home",{ lists:fullList})
                }
            }
        }

    }
    catch(err){
        console.log(err)

    }
}


module.exports= {
    loadHome,
    addList
}