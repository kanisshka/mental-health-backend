import express from "express";
const router = express.Router();
import QuizziesController from "../controllers/Quizziescontroller.js";

router.get('/',QuizziesController.getAllquiz)
router.post('/',QuizziesController.createquiz)
// router.get('/:id',QuizsetController.getoneOrder)
router.get('/find/:user',QuizziesController.getAllquizbyUser)
router.delete('/:id',QuizziesController.dltDocById)
router.put('/:id',QuizziesController.updateDocById)

export default router