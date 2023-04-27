import express from "express";
// import {verifyToken ,  verifyTokenAndAuthorization,
//     verifyTokenAndAdmin} from "../controllers/verifytoken";
const router = express.Router();
import CartController from "../controllers/cartcontroller.js";

router.get('/:id/cart',CartController.allcart)
router.post('/:id/addtocart',CartController.addcart)

export default router