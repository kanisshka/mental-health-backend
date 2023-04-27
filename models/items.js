import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
    owner : {
        type: ObjectID,
        required: true,
        ref: 'User'
     },
     name: {
        type: String,
        required: true,
        trim: true
     },
     description: {
       type: String,
       required: true
     },
     category: {
        type: String,
        required: true
     },
     price: {
        type: Number,
        required: true
     }
},{timestamps:true});
mongoose.models={}
const ItemModel = mongoose.model("Item",ItemSchema);
export default ItemModel;