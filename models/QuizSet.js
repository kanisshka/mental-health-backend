import mongoose from "mongoose";
// import dateFormat from "../validators/dateFormat";
const QuizsetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },//owner
    quizzies:
        [
            {
                dateTaken: {
                    type: Date,
                    default: Date.now
                },
                quizTaken: {
                            type: String,
                            required: true,
                            // enum: quizNames
                        },
                        quizAnswer: {
                            type: String,
                            required: true,
                            // enum: quizNames
                        }, 
            }
        ]
    ,
}, { timestamps: true });
mongoose.models = {}
const QuizsetModel = mongoose.model("Quizset", QuizsetSchema);

export default QuizsetModel