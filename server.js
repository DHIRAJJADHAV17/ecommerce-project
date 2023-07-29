import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";
import path from "path";
//configure env
dotenv.config();

 
//databse config
connectDB();
//rest object
const app = express();

// //middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./client/build')))


//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);


app.use('*',function(req,res){

res.sendFile(path.join(__dirname,'./client/build/index.html'));
});
//rest api
// app.get("/", (req, res) => {

//   res.send("<h1>Welcome to ecommerce app</h1>");
// });
//PORT
const PORT = process.env.PORT || 8080;
//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
