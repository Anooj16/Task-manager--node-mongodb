const mongoose = require('mongoose')

const listschema= new mongoose.Schema({

    _id: { 
        type: mongoose.Types.ObjectId,
         required: true },

    inputField : {
        type : String
    }    
});


module.exports = mongoose.model("List", listschema);