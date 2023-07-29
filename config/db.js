import  mongoose from "mongoose"
import colors from "colors"

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongodb db ".bgGreen.white);
    }catch(err){
        console.log(err);
    }
}

export default connectDB;

