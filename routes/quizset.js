import express from "express";
const router = express.Router();
import QuizsetController from "../controllers/Quizsetcontroller.js";

// router.get('/',QuizsetController.getAllOrders)
router.post('/',QuizsetController.createquiz)
// router.get('/:id',QuizsetController.getoneOrder)
// router.get('/find/:userId',QuizsetController.getAllOrdersbyUser)
// router.delete('/:id',QuizsetController.dltDocById)

export default router