import express from "express";
const router = express.Router();
import UserModel from '../models/User.js';

import { genSalt, hash } from "bcrypt";

//update user profile  dvdf

router.put('/:id', async (req, res) => {
    if (req.body.userId == req.params.id) {
        if (req.body.password) {
            const salt = await genSalt(10);
            req.body.password = await hash(req.body.password, salt)
        }
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },
                {
                    new: true
                }
            );
            res.status(200).json(updatedUser)
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(401).json("you can only update your profile")
    }
});


export default router