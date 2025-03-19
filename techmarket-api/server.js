"use strict";
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./src/routes/productRoutes");
const morgan = require("morgan");
const errorHandler = require("./src/middleware/errorMiddleware");
const { pool } = require("./src/config/db");

dotenv.config();

const app = express();

pool
  .getConnection()
  .then((connection) => {
    console.log("Połączono z bazą danych");
    connection.release();
  })
  .catch((err) => {
    console.error("Błąd połączenia z bazą danych:", err);
    process.exit(1);
  });

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
