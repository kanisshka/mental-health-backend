import ContactModel from "../models/Contact.js";

class ContactController {
    static createMsg = async (req, res) => {
        // const neworder = new ContactModel(req.body);
        try {
            const { email, name, msg } = req.body
            const doc = new ContactModel({
                email: email,
                name: name,
                msg:msg,
                // lastName: lastName,
                // address: address,
                // state: state,
                // pincode: pincode,
                // phone: phone,
                // note: note,
                // cartItems:cartItems,
                // total:total,
            })
            const result = await doc.save()
            res.status(201).send({result})
        }
        catch (error) {
            console.log(error)
        }
    }
    static getAllMsg= async (req, res) => {
        try {
            const result = await ContactModel.find()
            res.send(result)
        }
       catch (error) {
            console.log(error)
        }
    }
    // static getAllOrdersbyUser= async (req, res) => {
    //     try {
    //         const result = await OrderModel.find({userId:req.params.userId}).sort({date:-1})
    //        console.log(req.params.userId)
    //         res.status(200).json(result);
    //         // res.send(result)
    //     }
    //    catch (error) {
    //         console.log(error)
    //     }
    // }
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
    // // static updateDocById = async (req, res) => {
    // //     try {
    // //         const result = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
    // //         res.send(result)
    // //     }
    // //     catch (error) {
    // //         console.log(error)
    // //     }
    // // }
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
export default ContactController
