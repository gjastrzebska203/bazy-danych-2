"use strict";
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./src/routes/productRoutes");
const morgan = require("morgan");
const errorHandler = require("./src/middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(morgan("dev"));
app.use("/api/products", productRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Serwer działa na porcie ${PORT} w trybie ${process.env.NODE_ENV}`
  );
});
