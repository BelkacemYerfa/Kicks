const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`server is runing in port ${Port} `);
});
