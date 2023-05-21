import mongoose from "mongoose";
// import dateFormat from "../validators/dateFormat";
const QuizziesSchema = new mongoose.Schema({
    title:{
        type:String, 
        unique:true,
    },
    desc:{
        type:String,
    },
    quiz:
        [
            {
               ques:{
                type:String,
               }
            }
        ]
    ,
}, { timestamps: true });
mongoose.models = {}
const QuizziesModel = mongoose.model("Quizzies", QuizziesSchema);

export default QuizziesModel