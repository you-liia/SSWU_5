const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config();

const defaultRoute = require('./routes/default'); 
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

app.use('/', defaultRoute);
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);         

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});