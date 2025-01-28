
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=UsersDb.mdb;');
 
module.exports = {connection};