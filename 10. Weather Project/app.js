const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    const query = req.body.cityName;
    const apiKey = "7acb3932a906504f6390c5282341f7b2";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+ units;

    https.get(url, function(response){
        console.log(response.statusCode);
    
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The weather is currently" + weatherDescription+"</h1>");
            res.write("<h1>Temp in "+query+" is "+ temp + " deg C.</h1>");
            res.write("<img src="+imgUrl+">");
            res.send()    
        })
    
    }) 
})
    


app.listen(3000, function(){
    console.log("Server is running at port 3000");
});