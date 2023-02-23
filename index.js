const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ECOM");

//user route
const user_route = require("./routes/userRoute");
app.use("/api", user_route);



//Home Route



app.listen(5000, function () {
  console.log("Server is Ready");
});
