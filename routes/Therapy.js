import express from "express";
const router = express.Router();
import TherapyController from "../controllers/Therapycontroller.js";

router.get('/',TherapyController.getAllTherapy)
router.post('/',TherapyController.createTherapy)
// router.get('/:id',QuizsetController.getoneOrder)
router.get('/find/:user',TherapyController.getAllTherapybyUser)
// router.delete('/:id',QuizsetController.dltDocById)

export default router