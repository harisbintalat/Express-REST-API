const Patient = require ('../models/patient');
const Doctor = require ('../models/doctor');

var sendJsonResponse = (res, status, content)=>{
    res.status(status)
    res.json(content)
}
exports.login=(req,res)=>{
    if(req.body.username && req.body.password ){
        Patient.findOne({username:req.body.username},(err,data)=>{
            if(err){
                sendJsonResponse(res,400,err)
            }
            else if(data != null){
                req.session.authentication = true
                req.session.patientId = data._id
                sendJsonResponse(res,400,{'Message':'Successfully logged in'})
            }
            else{
                sendJsonResponse(res,400,{'Message':'Doctor is not registered'})
            }
        })
    }
    else{
        sendJsonResponse(res,400,{'Message':'username and password are required'})
    }
}