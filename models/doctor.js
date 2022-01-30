const { ObjectId } = require('mongodb');
const mongoose = require ('mongoose');
const doctorSchema = new mongoose.Schema({
    doc_Id:{
        _id:mongoose.Schema.Types.ObjectId,
    },
    name:{
        type:String,
        required:true
    },
    specialiazation:{
        type:String,
        

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
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor