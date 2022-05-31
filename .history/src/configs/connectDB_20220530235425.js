// get the client
import res from "express/lib/response";
import mysql from "mysql2/promise";

// create the connection to database
const mysql = require("mysql2/promise");

console.log("Creating connection pool");
const pool = mysql.createPool({
  host: "localhost",
  users: "root",
  database: "nodejsbasic",
});

// simple query
// connection.query("SELECT * FROM `users`", function (err, results, fields) {
//   console.log(">>>check mysql");
//   console.log(results); // results contains rows returned by server
//   let rows = results.map((row) => {
//     return row;
//   });
//   console.log(results[0]); // results contains rows returned by server
// });

export default connection;
