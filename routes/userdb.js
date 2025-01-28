const conectionObj = require('./connection.js');
const connection = conectionObj.connection;
const getUsersFromDB = async () => { return await connection.query('select * from Users');}



const addUser = async(user) =>{
  connection.execute('INSERT INTO Users(FirstName, lastName,EmailAddress, Age) VALUES ("'+user.FirstName+'", "'+user.LastName+'","'+user.EmailAddress+'",'+user.Age+')')
  .then(data => { console.log(JSON.stringify(data, null, 2)); })
  .catch(error => {console.error(error);});
}

module.exports = { getUsersFromDB, addUser };
