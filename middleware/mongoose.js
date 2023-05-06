
import mongoose from "mongoose";


const connectDb = async (DATABASE_URL)=>{
   try{
    const DB_OPTIONS ={
        dbName: 'mental-health',
    }
    await mongoose.connect(DATABASE_URL,DB_OPTIONS);
    console.log("connected");
   }
   catch(err){
    console.log(err);
   }
}
export default connectDb;