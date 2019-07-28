const express = require('express');
const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const path = require('path');

// const items = require("./routes/api/Items");

const app = express();

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

app.get('/neworder', (req, res) => {
  const post = {
    meal_name: 'post one',
    description: 'this is post 1',
    meal_type: 'test'
  };
  const sql = 'INSERT INTO meal orders SET ? ';
  const query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send('testText');
  });
});

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, meal_name: 'John', description: 'Doe', meal_type: '123' },
    { id: 2, meal_name: 'foo', description: 'bar', meal_type: '123' },
    { id: 3, meal_name: 'John', description: 'Doe', meal_type: '123' }
  ];

  res.json(customers);
});

// //bodyparser middleware
// app.use(bodyParser.json());

// //DB config
// const db = require("./config/keys").mongoURI;

// //connect to Mongo
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err));
// //use routes
// app.use("/api/items", items);

// //serve static assets if we are in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
