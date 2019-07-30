const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const mealOrders = require('./routes/api/MealOrders');

app.use('/', mealOrders);

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

// const path = require('path');

// const mealOrders = require('./routes/api/MealOrders');

// app.use('/mealorders', mealOrders);

// app.post('/mealorders/add', (req, res) => {
//   const post = {
//     meal_name: 'post one',
//     description: 'this is post 1',
//     meal_type: 'test'
//   };
//   console.log('==============', req.json);

//   res.send(req.body);

// console.log('11111', req);

// const sql = `INSERT INTO meal_orders  VALUES (NULL, '33','33','33')`;
// db.query(sql, post, (err, result) => {
//   if (err) throw err;
//   res.send('testText');
// });
// });

// app.get('/mealorders', (req, res) => {
//   const sql = 'SELECT * FROM `meal_orders`';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.listen(port, () => console.log(`Server started on port ${port}`));
