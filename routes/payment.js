import express from "express";
const router = express.Router();
import Paymentcontroller from "../controllers/paymentcontroller.js";


router.post('/payorder',Paymentcontroller.payorder)
router.post('/createorder',Paymentcontroller.createorder)
router.get('/',Paymentcontroller.main)
router.get('/listorders',Paymentcontroller.listorders)
// router.put('/:id',ProductController.updateDocById)
// router.delete('/:id',ProductController.dltDocById)
//dddds

export default router
