import express from "express";
const router = express.Router();
import UserController from "../controllers/usercontroller.js";

router.post('/signin',UserController.signin)
router.post('/signup',UserController.signup)
router.get('/logout',UserController.logout)
router.get('/',UserController.getAllDoc)
// router.put('/:id',ProductController.updateDocById)
// router.delete('/:id',ProductController.dltDocById)

export default router