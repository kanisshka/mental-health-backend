import express from "express";
const router = express.Router();
import OrderController from "../controllers/ordercontroller.js";

router.get('/',OrderController.getAllOrders)
router.post('/',OrderController.createOrder)
router.get('/:id',OrderController.getoneOrder)
router.get('/find/:userId',OrderController.getAllOrdersbyUser)
router.delete('/:id',OrderController.dltDocById)

export default router