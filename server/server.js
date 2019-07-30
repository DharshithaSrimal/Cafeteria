const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const path = require('path');

// const mealOrders = require('./routes/api/MealOrders');

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

// app.use('/mealorders', mealOrders);

app.post('/mealorders/add', (req, res) => {
  const post = {
    meal_name: 'post one',
    description: 'this is post 1',
    meal_type: 'test'
  };
  console.log('==============', req.body.meal_name);

  // console.log('11111', req);

  const sql = `INSERT INTO meal_orders  VALUES (NULL, '33','33','33')`;
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send('testText');
  });
});

app.get('/mealorders', (req, res) => {
  const sql = 'SELECT * FROM `meal_orders`';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//bodyparser middleware
app.use(bodyParser.json());

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
