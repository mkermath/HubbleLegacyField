// index.js


var http = require('http'); 
const express = require('express');
const app = express();



const _PORT = 8813;

app.use(express.static('public'))

app.listen(_PORT, function() {
  console.log('listening on ' + _PORT)
})

app.get('/', (req, res) => {
	console.log('request for /')
	res.sendFile(__dirname + '/index.html')
});