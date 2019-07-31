const Sequlize = require('sequelize');
const mysql = require('mysql');

// const db = {};

// const sequelize = new Sequlize('nodejs_login1', "root1", "", {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorAliases: false,

//   pool:
// })

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root@123',
  database: 'cafeteria'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('connected...');
});

module.exports = db;
