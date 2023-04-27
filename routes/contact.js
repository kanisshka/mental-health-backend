import express from "express";
const router = express.Router();
import ContactController from "../controllers/contactcontroller.js";

router.get('/',ContactController.getAllMsg)
router.post('/',ContactController.createMsg)
// router.get('/:id',OrderController.getoneOrder)
// router.get('/find/:userId',OrderController.getAllOrdersbyUser)
// router.delete('/:id',OrderController.dltDocById)

export default router