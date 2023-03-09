let express = require('express');
let app = express();


app.use(express.static(__dirname));

console.log("Hello World");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});




































 module.exports = app;
