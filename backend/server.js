const express = require("express");
const cors = require("cors");

const todoRouter = require("./routes/todoRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/todos", todoRouter);
connectDB();

app.listen(5500, () => {
  console.log("running on port on 5500");
});
