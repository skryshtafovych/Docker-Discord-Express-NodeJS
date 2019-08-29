const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const express = require('express');
const https = require("https");
var request = require('request');
const bodyParser = require('body-parser');
const fs = require('fs');




const app = express();
//app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//Where all Static resources should be loaded from
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/tokenSetter.*/', (req, res) => {
  res.sendFile(__dirname + '/tokenSetter.html')
});


////////////////////////////////////////////////////////
///////////Where we write Key to file//////////////
////////////////////////////////////////////////////////
app.post('/setBotKey/', (req, res) => {


  fs.readFile('auth.json', function read(err, data) {
  if (err) {
      throw err;
  }
  content = data;
  res.send('InsideBotKey Setter');
  console.log("Setter GET Token"+JSON.stringify(req.body));   // Put all of the code here (not the best solution)
  var fileTOKEN = JSON.stringify(req.body)

  fs.writeFile('auth.json', fileTOKEN, 'utf8',fakeDoer);

});
});


function fakeDoer(){
  console.log("Fake Promise");   // Put all of the code here (not the best solution)

};



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {





  console.log(`Logged in as ${client.user.id}!`);
  var userID = `PONG as ${client.user.id}! This is where you create Custom Logic add user interact with DB and other features you want your Bot to Have. To Customize the PRJ download Code Customize it and Deploy it to Cloud`


  if (msg.content === 'ping') {
    msg.reply(userID);
  }

  if (msg.content === 'Create Insta Post') {
    msg.reply('Now my Dope Container will fetch Thangz and Do Cool Dope THings'+ip);
  }


});

client.login(auth.token);


var listener = app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + listener.address().port);
});
