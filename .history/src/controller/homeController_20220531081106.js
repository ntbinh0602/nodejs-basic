import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
  let data = [];
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUser: rows });
};

module.exports = {
  getHomepage,
  getDetailpage,
};
