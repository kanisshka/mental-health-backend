import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  isPaid: {
    type: Boolean,
  },
  amount: {
    type: Number,
  },
  razorpay:
    {
      orderId: {
        type: String,
        required: true,
      },
      paymentId: {
        type: String,
        required: true,
      },
      signature: {
        type: String,
        required: true,
      }
    },
}, { timestamps: true });
mongoose.models = {}
export default mongoose.model("Payment", PaymentSchema);