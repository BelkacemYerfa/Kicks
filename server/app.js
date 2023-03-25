const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const ConnectDb = require("./db/connect");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", router);

const Port = process.env.PORT || 5000;

const start = async () => {
  try {
    await ConnectDb(process.env.MONGO_URI);
    app.listen(Port, () => {
      console.log(`server is runing on port ${Port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
