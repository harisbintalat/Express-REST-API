const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Appointment = require('../models/appointment');
var sendJsonResponse = (res, status, content) => {
    res.status(status)
    res.json(content)
}
exports.addDoctor = (req, res) => {
    if (req.body.name && req.body.username && req.body.password) {
        Doctor.findOne({ username: req.body.username }, (err, data) => {
            if (err) {
                sendJsonResponse(res, 400, err)
            }
            else if (data != null) {
                sendJsonResponse(res, 403, { 'Message': 'Doctor with same username already exists' })
            }
            else {
                const doc = new Doctor(req.body)
                doc.save((err, doctor) => {
                    if (err) {
                        sendJsonResponse(res, 400, err)
                    }
                    else {
                        sendJsonResponse(res, 201, doctor)
                    }
                })
            }
        })
    }
    else {
        sendJsonResponse(res, 400, { 'Message': 'username, password and name are required' })
    }
}
exports.setappointments = (req, res) => {
        const apt = new Appointment(req.body)
        publisher.save((err) => {
            if (err) {
              sendJsonResponse(res, 400, err)
            }
            else {
              sendJsonResponse(res, 200, {'Message':'Appointment successfully created'})
            }
          });
}

exports.updateapointment = (req, res) => {
    Appointment.updateOne({ _id: req.params.Apt_id }, req.body, (err, data) => {
        if (err) {
            sendJsonResponse(res, 400, err)
        }
        else if (data.matchedCount != 0) {
            sendJsonResponse(res, 200, { 'Message': 'Successfully Updated' })
        }
        else {
            sendJsonResponse(res, 200, { 'Message': 'Appointment never exists' })
        }
    })
} 

exports.deleteapointment = (req, res) => {
    Appointment.deleteOne({ _id: req.params.Apt_id }, (err, data) => {
        if (err) {
            sendJsonResponse(res, 400, err)
        }
        else {
            sendJsonResponse(res, 204, 'none')
        }
    })

}
exports.addPatient = (req, res) => {
    if (req.body.name && req.body.username && req.body.password) {
        Patient.findOne({ username: req.body.username }, (err, data) => {
            if (err) {
                sendJsonResponse(res, 400, err)
            }
            else if (data != null) {
                sendJsonResponse(res, 403, { 'Message': 'Patient with same username already exists' })
            }
            else {
                const doc = new Patient(req.body)
                doc.save((err, patient) => {
                    if (err) {
                        sendJsonResponse(res, 400, err)
                    }
                    else {
                        sendJsonResponse(res, 201, patient)
                    }
                })
            }
        })
    }
    else {
        sendJsonResponse(res, 400, { 'Message': 'username, password and name are required' })
    }

}
exports.updateDoctor = (req, res) => {
    Doctor.updateOne({ _id: req.params.doctorid }, req.body, (err, data) => {
        if (err) {
            sendJsonResponse(res, 400, err)
        }
        else if (data.matchedCount != 0) {
            sendJsonResponse(res, 200, { 'Message': 'Successfully Updated' })
        }
        else {
            sendJsonResponse(res, 200, { 'Message': 'Doctor never exists' })
        }
    })
}

exports.updatePatient = (req, res) => {
    Doctor.updateOne({ _id: req.params.patientid }, req.body, (err, data) => {
        if (err) {
            sendJsonResponse(res, 400, err)
        }
        else if (data.matchedCount != 0) {
            sendJsonResponse(res, 200, { 'Message': 'Successfully Updated' })
        }
        else {
            sendJsonResponse(res, 200, { 'Message': 'Patient never exists' })
        }
    })

}
exports.getalldoctors = (req, res) => {
    Doctor.find({}).select('name username').exec((err, data) => {
        if (err) {
            sendJsonResponse(res, 400, err)
        }
        else {
            sendJsonResponse(res, 200, data)
        }
    })

}
exports.getallpatients = (req, res) => {
    Patient.find({}).select('name username ').exec((err, data) => {
        if (err) {
            sendJsonResponse(res, 400, err)
        }
        else {
            sendJsonResponse(res, 200, data)
        }
    })

}

exports.deletedoctor = (req, res) => {
    Doctor.deleteOne({ _id: req.params.doctorid }, (err, data) => {
        if (err) {
            sendJsonResponse(res, 400, err)
        }
        else {
            sendJsonResponse(res, 204, 'none')
        }
    })

}
exports.deletePatient = (req, res) => {
    Patient.deleteOne({ _id: req.params.patientid }, (err, data) => {
        if (err) {
            sendJsonResponse(res, 400, err)
        }
        else {
            sendJsonResponse(res, 204, 'none')
        }
    })

}