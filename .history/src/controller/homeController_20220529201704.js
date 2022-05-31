import connection from "../configs/connectDB";

let getHomepage = (req, res) => {
  //logic
  return res.render("index.ejs");
};

module.exports = {
  getHomepage,
};
