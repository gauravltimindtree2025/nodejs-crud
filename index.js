const express  = require('express');
const http = require('http');
const userObject = require("./routes/user.js");
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 8080;

app.get("/", (req,res) => {
    return res.send("using express sending response of request");
});

app.get("/users", (req,res) => {
    userObject.GetUsers().then(result => { return res.send(JSON.stringify(result, null, 2)); });
});

app.post('/users', (req, res) => {
    userObject.AddUser(req.body).then(_ => { res.send(`${req.body.FirstName} has been added to the Database`); });
});

app.get('/users/:id', (req,res) => {
    userObject.GetUser(req.params.id).then(result => {res.send(JSON.stringify(result, null, 2));});
});

app.delete('/users/:id', (req,res) => {
    userObject.DeleteUser(req.params.id).then(_ => { res.send(`${req.params.id} has been deleted from the Database`); });
});

let myserver = http.createServer(app);
 myserver.listen(PORT);
