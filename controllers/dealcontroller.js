import DealsModel from "../models/Deals.js";

class DealController {
    static createdeal = async (req, res) => {
        try {
            const { title,img } = req.body
            const doc = new DealsModel({
                title: title,
                img:img
            })
            const result = await doc.save()
            res.status(201).send({result})
        }
        catch (error) {
            console.log(error)
        }
    }
    static getdeal = async (req, res) => {
        try {
            const result = await DealsModel.find()
            res.send(result)
        }
       catch (error) {
            console.log(error)
        }
    }
 
}
export default DealController
