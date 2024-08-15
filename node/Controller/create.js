import db from "../db.js";
export const create = (req, res) => {
  const { name, contact, address, email, password } = req.body;

  const sql =
    "Insert into user(`name`,`contact`,`address`,`email`,`password`) value(?,?,?,?,?)";

  db.query(sql, [name, contact, address, email, password], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(result);
  });
};
