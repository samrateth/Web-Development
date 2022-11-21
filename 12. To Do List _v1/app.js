const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs'); 

app.use(bodyParser.urlencoded({extended:true}));
var items=["Buy food", "Eat food", "cook food"];

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("hi-IN", options);

    res.render("list", {kindOfDay: day, newListItems: items});
    
});

app.post("/", function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});