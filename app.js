const express = require('express');
const https = require('https');

const app = express();

app.get('/', function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?appid=5aebcfcc860581a4b109cef98866a494&q=London,uk&units=metric";
  
  // function(res) is called when the connection is established

  // on('data') is called when there's a chunk of data (this almost certainly will be more than once)

  // on('close') is called when the connection closes.


  https.get(url, function(response) {

    response.on("data", function(data) {

      const weatherData = JSON.parse(data)

      const temp = weatherData.main.temp;
      const weatherDes = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL ="http://openweathermap.org/img/wn//"+ icon +"@2x.png";




      // const weatherStr = "The weather at London is " + weatherDes;
      // res.send(" <p><h1> " + weatherStr + " The temp is "+ temp + "</h1></p>");


      //
      // const weatherStr = "The weather at London is " + weatherDes;
      // res.send("  <h1> " + weatherStr + "</h1>");
      

      const weatherStr = "The weather at London is " + weatherDes;
      res.write("  <h1> " + weatherStr + ".</h1>");
      res.write(" <h3> " +  " The temp is " + temp + " degree celcsius .</h3>");
      res.write("<img src= " + imageURL + " alt= 'weather-icon'>");

      res.send();

    })
  });


});
app.listen(3000, function() {
  console.log("Server running on port 3000");
});
