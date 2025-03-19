const fs = require("fs");
const path = require("path");
const pool = require("../config/db");

const initDB = async () => {
  try {
    console.log("Inicjalizacja bazy danych...");

    const sql = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");

    await pool.query(sql);

    console.log("Baza danych została zainicjalizowana pomyślnie.");
    process.exit(0);
  } catch (error) {
    console.error("Błąd inicjalizacji bazy danych:", error);
    process.exit(1);
  }
};

initDB();
