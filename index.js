const express  = require('express');
const http = require('http');
const userObject = require("./routes/user.js");
const app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const PORT = 8080;


app.get("/", (req,res) => {
    return res.send("using express sending response of request");
});

app.get("/users", (req,res) => {
    userObject.userList().then(result => { return res.send(result); })
});

const users = [];

app.post('/users', (req, res) => {
    const user = req.body;
    // console.log("user details :")
    // console.log("First Name :" , user.FirstName);
    // console.log("Last Name :" , user.LastName);
    // console.log("Email Address :" , user.EmailAddress);
    // console.log("Age :" , user.Age);
    //res.send(user);
    userObject.addUser(user).then(result => { res.send(`${user.FirstName} has been added to the Database`); });
})

let myserver = http.createServer(app);
 myserver.listen(PORT);
