const { ObjectId } = require('mongodb');
const mongoose = require ('mongoose');
const patientSchema = new mongoose.Schema({
    Pat_Id:{
        _id:mongoose.Schema.Types.ObjectId,
    },
    name:{
        type:String,
        required:true
    }, 
    age:{
        type:Number,
        

    },
    username:{
        type:String,
        required:true
    },
    password:{
          type:String,
          required:true
    },
    appointments:{
          type:[ObjectId],
          ref:'Appoinment'
    },
})
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient