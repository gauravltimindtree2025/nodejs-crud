const userdbObject =  require('./userdb.js')

// const users = async () => {  return await userdbObject.getUsersFromDB() };
// const userList = async () => { return users().then( x => {return x})}

async function GetUsers(){
    return userdbObject.GetUsers();
}

async function AddUser(user){
    userdbObject.AddUser(user);
}

async function GetUser(ID){
    return userdbObject.GetUser(ID);
}

async function DeleteUser(ID){
    return userdbObject.DeleteUser(ID);
}

module.exports = {GetUsers, AddUser, GetUser, DeleteUser}
