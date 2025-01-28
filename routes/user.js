const userdbObject =  require('./userdb.js')
const usersFromDB= userdbObject.getUsersFromDB();
const users = async () => {  return await usersFromDB };
const userList = async function getUsers(){ return users().then( x => {return x})}
const addUser = async function addUsers(user) { userdbObject.addUser(user);}

// users().then( x=> console.log(x));

module.exports = {userList, addUser}
