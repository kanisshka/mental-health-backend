import QuizziesModel from "../models/Quizzies.js";

class QuizziesController {
    static createquiz = async (req, res) => {
        const neworder = new QuizziesModel(req.body);
        try {
            // const { email, firstName,total, lastName, address, state, pincode, phone, note,cartItems } = req.body
            // const doc = new OrderModel({
            //     email: email,
            //     firstName: firstName,
            //     lastName: lastName,
            //     address: address,
            //     state: state,
            //     pincode: pincode,
            //     phone: phone,
            //     note: note,
            //     cartItems:cartItems,
            //     total:total,
            // })
            const result = await neworder.save()
            res.status(201).send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    static getAllquiz= async (req, res) => {
        try {
            const result = await QuizziesModel.find()
            res.send(result)
        }
       catch (error) {
            console.log(error)
        }
    }
    static getAllquizbyUser= async (req, res) => {
        try {
            const result = await QuizziesModel.find({user:req.params.user}).sort({date:-1})
           console.log(req.params.user)
            res.status(200).json(result);
            // res.send(result)
        }
       catch (error) {
            console.log(error)
        }
    }
    // static getoneOrder = async (req, res) => {
    //     // const owner = req.params.UserId
    //     // console.log(owner)
    //     try {
    //         // const result = await OrderModel.findOne({UserId : req.params.UserId}).sort({date:-1})
    //         const result = await OrderModel.findById(req.params.id)
    //         res.send(result);

    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
    // static updateDocById = async (req, res) => {
    //     try {
    //         const result = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
    //         res.send(result)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
    // static dltDocById = async (req, res) => {
    //     try {
    //         const result = await OrderModel.findByIdAndDelete(req.params.id)
    //         res.status(204).send(result)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
}
export default QuizziesController

