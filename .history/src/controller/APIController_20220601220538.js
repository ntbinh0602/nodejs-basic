import pool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    `insert into users(firstName,lastName,email,address) values (?,?,?,?)`,
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
