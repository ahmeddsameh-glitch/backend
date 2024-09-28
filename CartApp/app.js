const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const CartRoutes = require("./cart-routes");
PORT = 4000;
const corsOptions = {
  origin: "*",
};
//connection of database by mongoose
mongoose.connect("mongodb://localhost:27017/test");
mongoose.connection
  .once("open", () => {
    console.log(" cart database connected");
  })
  .on("error", () => {
    console.log("failed");
  });
  //for the backend of cartRoutes
app.use(express.json());
app.use(cors(corsOptions)); 
app.use((request, response, next) => {
    console.log(
      `${new Date().toString()} - ${request.method} - ${request.url}`,
      request.body
    );
    next();
  });
  app.use("/cart", CartRoutes);
  //products-routes acts as a middleware to be done
  // goes there as a parameter in the url
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  