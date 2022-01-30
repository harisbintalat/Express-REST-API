var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/staff')

router.post('/addDoctor',ctrl.addDoctor)
router.post('/addPatient',ctrl.addPatient)
router.put('/doctors/:doctorid',ctrl.updateDoctor)
router.put('/patients/:patientid',ctrl.updatePatient)
router.get('/doctors/',ctrl.getalldoctors)
router.get('/patients/',ctrl.getallpatients)
router.delete('/doctors/:doctorid',ctrl.deletedoctor)
router.delete('/patients/:patientid',ctrl.deletePatient)
router.get('/appointments/:patientid',ctrl.setappointments)
router.put('/appointments/:Apt_id',ctrl.updateapointment)
router.delete('/appointments/:Apt_id',ctrl.deleteapointment)

module.exports=router;