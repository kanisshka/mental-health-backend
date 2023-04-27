import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
    static signup = async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const existuser = await UserModel.findOne({ email: email })
            if (existuser) {
                return res.status(400).json({ message: "already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await UserModel.create({
                name: name,
                email: email,
                password: hashedPassword
            });
            const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_KEY);
            res.status(201).json({ user: result, token: token });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "went wrong" });
        }
    }
    static signin = async (req, res) => {

        try {
            const { email, password } = req.body;
            const existuser = await UserModel.findOne({ email: email })
            if (!existuser) {
                return res.status(400).json({ message: "not exists" });
            }
            const matchPassword = await bcrypt.compare(password, existuser.password);

            if (!matchPassword) {
                return res.status(400).json({ message: "invalid" });
            }

            const token = jwt.sign({ email: existuser.email, id: existuser._id }, process.env.SECRET_KEY
                ,{expiresIn:"3d"});
            res.status(201).json({ user: existuser, token: token });

        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "went wrong" });
        }

    }
    static logout = async (req, res) => {
        try {
            res.status(200);
            res.clearCookie('jwt');
            return res.redirect('/product/');
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "went wrong" });
        }
    }
}
export default UserController