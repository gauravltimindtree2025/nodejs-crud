const express  = require('express');
const http = require('http');
const userObject = require("./routes/user.js");
const app = express();

const PORT = 8080;


app.get("/", (req,res) => {
    return res.send("using express sending response of request");
});

app.get("/users", (req,res) => {
    userObject.userList().then(result => { return res.send(result); })
});

let myserver = http.createServer(app);
 myserver.listen(PORT);
