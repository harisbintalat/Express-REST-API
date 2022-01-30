var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/doctor')

router.post('/login',ctrl.login)
router.use((req,res,next)=>{
    if(req.session.authentication){
        next()
    }
    else{
        sendJsonResponse(res,403,{'Message':'Authentication required'})
    }
})

module.exports=router;