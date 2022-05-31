import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
  let data = [];
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailpage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute(`select * from users where id =?`, [id]);
  return res.send(JSON.stringify(user[0]));
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    `insert into users(firstName,lastName,email,address) values (?,?,?,?)`,
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let { userId } = req.body;
  await pool.execute(`delete from users where id=?`, [userId]);
  return res.redirect("/");
};

let getEditPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute(`select * from users where id = ?`, [id]);
  return res.render("update.ejs");
};

module.exports = {
  getHomepage,
  getDetailpage,
  createNewUser,
  deleteUser,
  getEditPage,
};
