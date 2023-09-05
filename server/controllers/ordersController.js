const db = require('../config/database');

exports.createOrder = async (req, res) => {
    try {
        const orderData = req.body;

        const customer = await createCustomerRecord(orderData.customer);
        const order = await createOrderRecord(customer.id, orderData.customer.totalPrice, orderData.customer.totalDiscount);
        
        for (const cartItem of orderData.cartItems) {
            await createOrderDetailRecord(order.id, cartItem.product.product_id, cartItem.quantity);
        }

        res.status(201).json({ message: 'Success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function createCustomerRecord(customerData) {
    return new Promise((resolve, reject) => {
        const insertCustomerQuery = 'INSERT INTO Customers (full_name, email, address, phone_number, message) VALUES (?, ?, ?, ?, ?)';
        const customerValues = [customerData.name, customerData.email, customerData.address, customerData.phone, customerData.message];
        
        db.query(insertCustomerQuery, customerValues, (err, customerResult) => {
            if (err) {
                reject(err);
            } else {
                resolve({ id: customerResult.insertId });
            }
        });
    });
}

async function createOrderRecord(customerId, totalPrice, totalDiscount) {
    return new Promise((resolve, reject) => {
        const insertOrderQuery = 'INSERT INTO Orders (customer_id, total_price, total_discount) VALUES (?, ?, ?)';
        const orderValues = [customerId, totalPrice, totalDiscount];
        
        db.query(insertOrderQuery, orderValues, (err, orderResult) => {
            if (err) {
                reject(err);
            } else {
                resolve({ id: orderResult.insertId });
            }
        });
    });
}

async function createOrderDetailRecord(orderId, productId, quantity) {
    return new Promise((resolve, reject) => {
        const insertOrderDetailsQuery = 'INSERT INTO OrderDetails (order_id, product_id, quantity) VALUES (?, ?, ?)';
        const orderDetailsValues = [orderId, productId, quantity];
        
        db.query(insertOrderDetailsQuery, orderDetailsValues, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}