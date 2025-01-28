const conectionObj = require('./connection.js');
const connection = conectionObj.connection;
const getUsersFromDB = async () => { return await connection.query('select * from Users');}

module.exports = { getUsersFromDB };


