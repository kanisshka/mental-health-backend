import mongoose from "mongoose";
const DealsSchema = new mongoose.Schema({
    title: { type: String },
    img: { type: String },

}, { timestamps: true });
mongoose.models = {}
const ProductModel = mongoose.model("Deals", DealsSchema);

export default ProductModel