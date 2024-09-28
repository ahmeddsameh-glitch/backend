const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const productRoutes = require("./products-routes");
PORT = 5000;
const corsOptions = {
  origin: "*",
};
//connection of database by mongoose
mongoose.connect("mongodb://localhost:27017/test");
mongoose.connection
  .once("open", () => {
    console.log("product database connected");
  })
  .on("error", () => {
    console.log("failed");
  });
//for the backend of productRoutes
app.use(express.json());
// cors middleware
app.use(cors(corsOptions)); // Pass the corsOptions to enable CORS properly

//application level middleware ( stops here for this console.log this go for the next )
app.use((request, response, next) => {
  console.log(
    `${new Date().toString()} - ${request.method} - ${request.url}`,
    request.body
  );
  next();
});
app.use("/products", productRoutes);
//products-routes acts as a middleware to be done
// goes there as a parameter in the url
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
