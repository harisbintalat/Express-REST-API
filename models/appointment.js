const { ObjectId } = require('mongodb');
const mongoose = require ('mongoose')
const apptSchema = new mongoose.Schema({
    Apt_id:{
        _id:mongoose.Schema.Types.ObjectId,
    },
    aptDate:{
        type:Date,
        default:Date.now,
    },
    doctor:{
        type:[ObjectId],
          ref:'Doctor'
    },
    patient:{
        type:[ObjectId],
          ref:'Patient'
    },

})
const Appointment = mongoose.model('Appointment',apptSchema)
module.export = Appointment