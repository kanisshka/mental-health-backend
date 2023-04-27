import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},//owner
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    cartItems: 
      {
        type:Object,required:true,
      }
      ,
      total:{type:Number,required:true}
      // slug: { type: String, ref:'Product', required: true },
      // quantity: {
      //     type: Number,
      //     required: true,
      //     min: 1,
      //     default: 1
      // },
      // name:{
      //   type:String,
      //   required:true,
      // },
      // price: {type: Number , required:true}
  
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // addressId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "UserAddress.address",
    //   required: true,
    // },
    // totalAmount: {
    //   type: Number,
    //   required: true,
    // },
    // items: [
    //   {
    //     productId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Product",
    //     },
    //     payablePrice: {
    //       type: Number,
    //       required: true,
    //     },
    //     purchasedQty: {
    //       type: Number,
    //       required: true,
    //     },
    //   },
    // ],
    // paymentStatus: {
    //   type: String,
    //   enum: ["pending", "completed", "cancelled", "refund"],
    //   required: true,
    // },
    // paymentType: {
    //   type: String,
    //   enum: ["cod", "card"],
    //   required: true,
    // },
    // orderStatus: [
    //   {
    //     type: {
    //       type: String,
    //       enum: ["ordered", "packed", "shipped", "delivered"],
    //       default: "ordered",
    //     },
    //     date: {
    //       type: Date,
    //     },
    //     isCompleted: {
    //       type: Boolean,
    //       default: false,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Order", OrderSchema);
