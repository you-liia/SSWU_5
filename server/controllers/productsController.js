const db = require('../config/database');

exports.getProducts = (req, res) => {
    const q = 'SELECT * FROM Products'; 
    db.query(q, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
};