import pool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllUsers,
};
