import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
  let data = [];
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailpage = (req, res) => {
  let id = req.params.id;
  let users = await pool.execute(`select from users where id =${id}`)
  return res.send("hello detail page");
};

module.exports = {
  getHomepage,
  getDetailpage,
};
