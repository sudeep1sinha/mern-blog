const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://admin:Ss4NN61xFeTGg382@sudeepcluster.pw8oh60.mongodb.net/")
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
