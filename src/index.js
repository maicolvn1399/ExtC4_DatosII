const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


//Connect to DataBase
mongoose.connect('mongodb+srv://michael-admin:webapp13@cluster0.7s2vm.mongodb.net/usersdb');
const db = mongoose.connection;

db.on('error', (err) => {
    if(err){
        console.log(err);
    }
});

db.once('open',() =>{
    console.log('Mongo DB Ready to use');
});

//Execute express server 
const app = express();

//Settings 
app.set('port',3000);
app.set('json spaces',2);


//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Route
app.use('/api',require('./routes/rt'));


//Server listening
app.listen(app.get('port'),() => {
    console.log('Server is ready');
});


