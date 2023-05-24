import express from "express";
const router = express.Router();
import QuizziesController from "../controllers/Quizziescontroller.js";

router.get('/',QuizziesController.getAllquiz)
router.post('/',QuizziesController.createquiz)
router.get('/:id',QuizziesController.getSingleDocById)
router.get('/find/:user',QuizziesController.getAllquizbyUser)
// router.delete('/:id',QuizsetController.dltDocById)

export default router