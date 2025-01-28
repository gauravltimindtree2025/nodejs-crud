const userdbObject =  require('./userdb.js')
const usersFromDB= userdbObject.getUsersFromDB();
const users = async () => {  return await usersFromDB };
const userList = async function getUsers(){ return users().then( x => {return x})}

// users().then( x=> console.log(x));

module.exports = {userList}
