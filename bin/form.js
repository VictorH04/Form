// const firstName = document.getElementById('first-name');
// const lastName = document.getElementById('last-name');
// const userName = document.getElementById('username');

// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const repeatPassword = document.getElementById('repeat-password');
// const btn = document.getElementById('btn');


// btn.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     let userData = {
        
//         frstName: firstName.value,
//         lstName: lastName.value,
//         usrName: userName.value,
//         email: email.value,
//         password: password.value,
//         repeatPassword: repeatPassword.value
    
//     };

//     if (userData.password.length <= 5) {
//         alert('Password must be longer than six initials');
//     }

//     if (userData.password !== userData.repeatPassword) {
//         alert('Please have matching passwords');
//     } 

//     console.log(userData);
// });

const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

let dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve('public/stylesheets')));
app.use(express.static(path.resolve('public/javascripts')));

let server = http.createServer(app);

let port = 3000;

app.get('/', (req, res) => {
	res.sendFile(path.resolve('index.html'));
});

app.listen(port, 'localhost');
server.on('listening', () => {
	console.log(`Express server started on port ${port}`, server.address().port, server.address().address);
});