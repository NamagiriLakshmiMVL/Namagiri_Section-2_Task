const express = require("express");
const mongoose = require("mongoose");
const nodemon = require("nodemon");
const deviceRouter = require("./routes/deviceRouter");
const userRouter = require("./routes/userRouter");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use("/device", deviceRouter);
app.use("/users", userRouter);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Mongoose is Connected");
  app.listen(process.env.PORT, () =>
    console.log("Server is connected on the PORT", process.env.PORT)
  );
});
