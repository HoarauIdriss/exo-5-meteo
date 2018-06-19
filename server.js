var express = require ('express');
var server = express();
var request = require('request');

server.use(express.static(__dirname));


server.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

server.get("/meteo/Reunion",function(req,res){
    const request = require('request');
    let apiKey = 'c972e85bfe843d82722b1cce870768aa';
    let city = 'Reunion';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`    
    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            // var weather = JSON.parse(body)
            console.log('body:', body);
        }
        res.send(response)
    });
});


server.get("/meteo/Paris",function(req,res){
    const request = require('request');
    let apiKey = 'c972e85bfe843d82722b1cce870768aa';
    let city = 'Paris';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`    
    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            // var weather = JSON.parse(body)
            console.log('body:', body);
        }
        res.send(response)
    });

    server.get("/meteo/Marseille",function(req,res){
        const request = require('request');
        let apiKey = 'c972e85bfe843d82722b1cce870768aa';
        let city = 'Marseille';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`    
        request(url, function (err, response, body) {
            if (err) {
                console.log('error:', error);
            } else {
                // var weather = JSON.parse(body)
                console.log('body:', body);
            }
            res.send(response)
        });

        server.get("/meteo/Moscou",function(req,res){
            const request = require('request');
            let apiKey = 'c972e85bfe843d82722b1cce870768aa';
            let city = 'Moscou';
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`    
            request(url, function (err, response, body) {
                if (err) {
                    console.log('error:', error);
                } else {
                    // var weather = JSON.parse(body)
                    console.log('body:', body);
                }
                res.send(response)
            });

});

server.listen(3208);})})



// http://api.openweathermap.org/data/2.5/weather?q=Reunion&APPID=c972e85bfe843d82722b1cce870768aa   // Reunion

// http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=c972e85bfe843d82722b1cce870768aa    // Paris


// http://api.openweathermap.org/data/2.5/weather?q=Marseille&APPID=c972e85bfe843d82722b1cce870768aa // Marseille


// http://api.openweathermap.org/data/2.5/weather?q=Moscou&APPID=c972e85bfe843d82722b1cce870768aa  // Moscou




