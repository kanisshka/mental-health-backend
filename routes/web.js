import express from "express";
const router = express.Router();
import ProductController from "../controllers/productcontroller.js";

router.get('/',ProductController.getAllDoc)
router.post('/',ProductController.createDoc)
router.get('/:id',ProductController.getSingleDocById)
router.put('/:id',ProductController.updateDocById)
router.delete('/:id',ProductController.dltDocById)

export default router