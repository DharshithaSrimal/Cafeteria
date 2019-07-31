const express = require('express');

const mealOrders = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

mealOrders.use(cors());

const db = require('../../database/db');

mealOrders.post('/mealOrders/add', (req, res) => {
  console.log(req.body);
  const sql = `INSERT INTO meal_orders  VALUES
    (NULL, '${req.body.mealName}','${req.body.description}','${req.body.mealType}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

mealOrders.get('/mealorders', (req, res) => {
  const sql = 'SELECT * FROM `meal_orders`';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

mealOrders.put('/mealorders/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const sql = `UPDATE meal_orders SET meal_name = '${req.body.mealName}', 
    description = '${req.body.description}', meal_type = '${req.body.mealType}' WHERE order_id = '${req.params.id}'`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

mealOrders.delete('/mealorders/:id', (req, res) => {
  const sql = `DELETE FROM  meal_orders WHERE order_id = ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = mealOrders;
// const router = express.Router();

// //Item model
// // const Item = require('../../models/Item');

// // // @route   GET api/items
// // // @desc    Get ALL Items
// // // @access  Public
// // router.get('/', (req, res) => {
// //   Item.find()
// //     .sort({ date: -1})
// //     .then(items => res.json(items));
// // });

// // router.get('/', (req, res) => {
// //   const sql = 'SELECT * FROM `meal_orders`';
// //   db.query(sql, (err, results) => {
// //     if (err) throw err;
// //     res.json(results);
// //   });
// // });

// // @route   POST api/items
// // @desc    Create An Item
// // @access  Public
// router.post('/', (req, res) => {
//   const newItem = new Item({
//     name: req.body.name
//   });

//   newItem.save().then(item => res.json(item));
// });

// // @route   DELETE api/items/:id
// // @desc    Create An Item
// // @access  Public
// router.delete('/:id', (req, res) => {
//   Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ sucess: false }));
// });

// module.exports = router;
