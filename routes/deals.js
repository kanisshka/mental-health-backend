import express from "express";
const router = express.Router();
import DealController from "../controllers/dealcontroller.js";

router.get('/',DealController.getdeal)
router.post('/',DealController.createdeal)



export default router