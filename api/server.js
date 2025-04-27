const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("../routes/authRoutes");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

app.use("/api/auth", authRoutes);

module.exports.handler = serverless(app); // <-- VERY IMPORTANT
