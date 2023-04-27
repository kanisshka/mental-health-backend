import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    productname: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    productPictures:
        [
            { 
                img: { type: String } 
            }
        ]
    ,
    category: { type: String, required: true },
    thumbnail:{type:String},
    sale: { type: Boolean },
    newarrival: { type: Boolean },
    trending: { type: Boolean },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
}, { timestamps: true });
mongoose.models = {}
const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel