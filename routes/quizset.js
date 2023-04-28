import express from "express";
const router = express.Router();
import QuizsetController from "../controllers/Quizsetcontroller.js";

router.get('/',QuizsetController.getAllquiz)
router.post('/',QuizsetController.createquiz)
// router.get('/:id',QuizsetController.getoneOrder)
router.get('/find/:user',QuizsetController.getAllquizbyUser)
// router.delete('/:id',QuizsetController.dltDocById)

export default router