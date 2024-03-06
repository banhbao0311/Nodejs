const db = require('../db/connectDB');

const customer  = {
    findAll: (cb) =>{
        return db.query('SELECT * FROM customer',cb)
    },
    findById : (id,cb) =>{
        return db.query('SELECT * FROM customer WHERE id=?',[id],cb);
    },
    create: (data,cb) =>{
        return db.query('INSERT into customer(name,email,phone) VALUES (?,?,?)',[data.name,data.email,data.phone], cb);
    },
    deleteById: (id,cb) =>{
        return db.query('DELETE FROM `customer` WHERE id =?',[id],cb);
    }
}


module.exports = customer;