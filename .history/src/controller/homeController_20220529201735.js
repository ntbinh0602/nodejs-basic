import connection from "../configs/connectDB";

let getHomepage = (req, res) => {
  //logic

  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    console.log(">>>check mysql");
    console.log(results); // results contains rows returned by server
    let rows = results.map((row) => {
      return row;
    });
    console.log(results[0]); // results contains rows returned by server
  });

  return res.render("index.ejs");
};

module.exports = {
  getHomepage,
};
