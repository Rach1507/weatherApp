const express = require('express');
const https = require('https');

const app = express();

app.get('/', function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?appid=5aebcfcc860581a4b109cef98866a494&q=London,uk&units=metric";
  https.get(url, function(response) {



        response.on("data", function(data) {

        const weatherData = JSON.parse(data)


        const weatherDes = weatherData.weather[0].description;
        console.log(weatherDes);







        const weatherStr = "The weather at London is " + weatherDes;
        res.send(weatherStr);
    })
  });


});
app.listen(3000, function() {
  console.log("Server running on port 3000");
});
