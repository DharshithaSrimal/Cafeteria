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

// const path = require('path');

app.listen(port, () => console.log(`Server started on port ${port}`));
