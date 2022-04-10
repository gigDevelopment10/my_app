// dependencies 
// yarn add express cors twilio

const express = require('express');
const cors = require('Cors');
const twilio = require('twilio');

// Twilio requirements -- Texting API 
const accountSid = 'AC1ca02525e3bc7f85d56b4eb03a777d16';
const authToken = '470265e7af7c46ede4e3df885e982dee';
const client = new twilio(accountSid, authToken);

const app = express();

app.use(cors());// blocks the browzer from any data 
app.get('/' , (req,res)=>{
    res.send("Welcome to express server");

});

// Twilio text 
app.get('/send-text', (req,res)=>{
    //_Get variables passed via query string 
    const {recipient, textmessage} = req.query ;
    //Send text 
    client.messages.create({
        body : textmessage,
        to : "+91"+recipient,
        from : '+16203180877' //from twilio 
    }).then((message)=> console.log(message.body))

})

// must have nodemon installed 
// link --> https://www.npmjs.com/package/nodemon

app.listen(4000, console.log("Running on port 4000"));