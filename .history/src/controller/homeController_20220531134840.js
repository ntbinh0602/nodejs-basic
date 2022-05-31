import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
  let data = [];
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailpage = async (req, res) => {
  let id = req.params.id;
  let user = await pool.execute(`select * from users where id =?`, [id]);
  return res.send(JSON.stringify(user[0]));
};

let createNewUser = (req, res) => {
  console.log("check req", req.body);
  let result = await pool.execute(`insert into users(firstName,lastName,email,address) values (${req.firstName},${req.lastName},${req.email},${req.address})`)
  return res.send("call post new user");
};

module.exports = {
  getHomepage,
  getDetailpage,
  createNewUser,
};
