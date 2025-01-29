const conectionObj = require('./connection.js');
const connection = conectionObj.connection;

async function GetUsers(){
    try {
        return await connection.query('SELECT * FROM Users');
    } catch (error) {
        console.error(error);
    }
}

async function AddUser(user){
    try {
        await connection.query('INSERT INTO Users(FirstName, lastName,EmailAddress, Age) VALUES ("'+user.FirstName+'", "'+user.LastName+'","'+user.EmailAddress+'",'+user.Age+')');
    } catch (error) {
        console.error(error);
    }
}

async function GetUser(ID) {
    try {
        return await connection.query('SELECT * from Users where ID= '+ID+'');
    } catch (error) {
        console.error(error);
    }
}

async function DeleteUser(ID) {
    try {
        return await connection.query('Delete from Users where ID= '+ID+'');
    } catch (error) {
        console.error(error);
    }
}

 module.exports = { GetUsers, AddUser, GetUser, DeleteUser};
