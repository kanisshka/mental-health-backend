import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    msg: {
        type: String, required: true
    }
}, { timestamps: true });
mongoose.models = {}
const ContactModel = mongoose.model("Contact", ContactSchema);
export default ContactModel;