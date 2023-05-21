import express from "express";
import cors from  "cors";
import connectDb from "./middleware/mongoose.js";
import web from "./routes/web.js";
import auth from './routes/auth.js';
import users  from "./routes/users.js"
import cart from "./routes/cart.js";
import payment from "./routes/payment.js";
import order from "./routes/order.js";
import contact from "./routes/contact.js";
import quizSet from "./routes/quizset.js";
import therapy from "./routes/Therapy.js";
import quizzies from "./routes/quizzies.js";



import Razorpay from "razorpay";
import * as dotenv from 'dotenv' 
dotenv.config()
const app = express()
const port =  process.env.PORT || 5000 // push krne s pehle yeh thik krna h *
const DATABASE_URL = process.env.DATABASE_URL || "";

connectDb(DATABASE_URL);
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
// }
//json
app.use(express.json())
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hey");
});
// export const instance = new Razorpay({
//     key_id: process.env.YOUR_KEY_ID,
//     key_secret: process.env.YOUR_SECRET,
// });
app.use("/api/auth",auth);
app.use("/api/users",users);
app.use("/api/products",web);
app.use("/api",cart);
app.use("/api/order",order);
app.use("/api/quizset",quizSet);
app.use("/api/therapy",therapy);
app.use("/api/quizzies",quizzies);


app.use("/api/contact",contact);



app.use("/api/payment",payment);
app.listen(port,()=>{
    console.log(`ser listening at http://localhost:${port}`)
})