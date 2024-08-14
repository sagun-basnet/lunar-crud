import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "crud1",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else console.log("Connected to database");
});

export default db;
