import paymentModel from "../models/payment.js";
// import { instance } from "../index.js";
import Razorpay from "razorpay";
import * as dotenv from 'dotenv'
dotenv.config()

class Paymentcontroller {
  static createorder = async (req, res) => {
    try {
       const instance = new Razorpay({
        key_id: process.env.YOUR_KEY_ID,
        key_secret: process.env.YOUR_SECRET,
      });
      var options = {
        amount: req.body.amount,
        currency: 'INR',
      };
      const order = await instance.orders.create(options);
      if(!order) return res.status(500).send('error');
      // res.status(200).json({
      //   success: true,
      //   order,
      // });
      res.send(order);
    }
    catch (err) {
      res.status(500).send(err);
    }
  };
  static main = async (req, res) => {
    res.send({key:process.env.YOUR_KEY_ID});
  };

  static payorder = async(req,res) =>{
    try{
    const { amount , razorpayOrderId , razorpayPaymentId , razorpaySignature} = req.body;

    const newPayment = paymentModel({
      isPaid:true,
      amount:amount,
      razorpay:{
        orderId:razorpayOrderId,
        paymentId:razorpayPaymentId,
        signature:razorpaySignature,
      },
    });
    await newPayment.save();
    res.send({
      msg:'payment done',
    });
  }
  catch(err){
    res.status(500).send(err);
  }
};
static listorders = async(req,res) =>{
  const orders = await paymentModel.find();
  res.send(orders);
}
  // export const paymentVerification = async (req, res) => {
  //     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  //       req.body;

  //     const body = razorpay_order_id + "|" + razorpay_payment_id;

  //     const expectedSignature = crypto
  //       .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
  //       .update(body.toString())
  //       .digest("hex");

  //     const isAuthentic = expectedSignature === razorpay_signature;

  //     if (isAuthentic) {
  //       // Database comes here

  //       await Payment.create({
  //         razorpay_order_id,
  //         razorpay_payment_id,
  //         razorpay_signature,
  //       });

  //       res.redirect(
  //         `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
  //       );
  //     } else {
  //       res.status(400).json({
  //         success: false,
  //       });
  //     }
  //   };
}
export default Paymentcontroller