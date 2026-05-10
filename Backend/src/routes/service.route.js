// const express = require('express');
// const serviceModel = require('../models/service.model');
// const usermodel = require('../models/usermodel');
// const auth = require('../middleware/auth.middleware');

// const ServiceRouter = express.Router();

// //Show services got till the date:

// ServiceRouter.get('/got-served', async (req, res)=>{
//     try {
//         const services = await serviceModel.find(req.userId).populate();
//         if(!services){
//             res.status(403).json({
//                 message:`Not served yet..`
//             });
//         }
//         res.status(200).json({
//             message:`Services fetch successfully`,
//             services
//         });
//     } catch (error) {
//         res.status(500).json({
//             message:`error found :${error.message}`
//         });
//     }
    
// });

// module.exports = ServiceRouter;