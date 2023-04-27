import ProductModel from "../models/Product.js";

class ProductController {
    static createDoc = async (req, res) => {
        try {
            const { title, slug, desc,productPictures, thumbnail,sale,newarrival,trending,productname, category, price, availableQty } = req.body
            const doc = new ProductModel({
                title: title,
                slug: slug, 
                productname:productname,
                desc: desc,
                productPictures: productPictures,
                category: category,
                price: price,
                thumbnail:thumbnail,
                sale:sale,
                newarrival:newarrival,
                trending:trending,
                availableQty: availableQty
            })
            const result = await doc.save()
            res.status(201).send({result})
        }
        catch (error) {
            console.log(error)
        }
    }
    static getAllDoc = async (req, res) => {
        try {
            const result = await ProductModel.find()
            res.send(result)
        }
       catch (error) {
            console.log(error)
        }
    }
    static getSingleDocById = async (req, res) => {
        try {
            const result = await ProductModel.findById(req.params.id)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    static updateDocById = async (req, res) => {
        try {
            const result = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    static dltDocById = async (req, res) => {
        try {
            const result = await ProductModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
}
export default ProductController
