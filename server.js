const express = require('express');
const parser = require('body-parser');
const morgan = require ('morgan');
const mysql = require('mysql');
const session = require('express-session')
const crypto = require('crypto')

//middleware

//a convenient variable to refer to the html directory
var html_dir = './public/'

const app = express();


//logs the activities for requests, posts
app.use (morgan("short"));

//use body-parser

app.use(parser.urlencoded({extended:false}));


//routes to serve the static files( html and css)

app.use(express.static('./public'));
//creating an object  session to create an instance 
app.use(session({
    secret: 'secret',//for security issues, to keep the session secret
    resave:true,
    saveUninitialized:true
}));




app.get('/res', function(req,res){
    res.sendfile(html_dir + 'home.html')
});


//
app.get('/login', function(req,res){
    res.sendfile(html_dir + 'login.html');
});

app.get('/signup', function(req,res){
    res.sendfile(html_dir + 'index.html');
});

app.get('/home', function(req,res){
    if (req.session.loggedin){
        res.send('Welcome back,' + req.session.username + '!')
    } else{
        res.send('Please login to view this page!')
    }
    res.end();
})
 //Api for returning objects
// app.get('/users',(req,res)=>{
//     let user1 = {name:"Okia", age:32, gender: "male", location:"muyenga"};
//     let user2 = {name: "Jacob", age:30, gender: "male", location: "kumi"}

//     res.json([user1,user2])
// });


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'Employees',
    password:''
})

//api for picking users from the database
app.get('/users/:userid', (req,res)=>{
    console.log(req.params.userid);
    console.log('getting all users from the database');
    connection.query('SELECT * FROM Register where userid = 00006', (err,rows,fields)=>{
        console.log('providing the fetched details')
    
        res.json(rows);
    })
})


app.post('/userdetails', (req,res)=>{

    const userid = req.body.userid;
    const password = req.body.password;
    const name = req.body.name;
    const address = req.body.address;
    const country = req.body.country;
    const  zip    = req.body.zip;
    const email = req.body.email; 
    const gender = req.body.gender;
    const language = req.body.language;
    const about = req.body.textarea;
//hash is to encrypt the password
    const hash = crypto.createHash('md5').update(password).digest('hex');
 
    let queryString = "insert into Register(userid,password,name,address,country,zip,email,gender,language,about)value (?,?,?,?,?,?,?,?,?,?)"

    connection.query(queryString,[userid,hash,name,address,country,zip,email,gender,language,about]);
    connection.end();

/*
    console.log('getting the form input ' + req.body.userid)
    console.log('getting the form input ' + req.body.name)
    console.log('getting the form input ' + req.body.password)
    console.log('getting the form input ' + req.body.address)
    console.log('getting the form input ' + req.body.country)
    console.log('getting the form input ' + req.body.zip)
    console.log('getting the form input ' + req.body.email)
  */  

  app.redirect('/login')
    res.end();

});

app.post('/auth', (req,res)=>{
    const name = req.body.username
    const pass= req.body.password

    const hash = crypto.createHash('md5').update(pass).digest('hex');
   

    if (name && pass)
    {
        connection.query('SELECT * FROM  Register where name = ? && password = ?',[name,hash], function(error,results,fields){
            if (results.length > 0)
            {
                req.session.loggedin = true;
                req.session.username = name;
                res.redirect('/home');
            }

            else{
                res.redirect('/signup');
                    //res.send('incorrect username and /or password')
                }

            res.end();
        });

    }else{
            res.send("Please enter username and password")
            res.end()
        }
    });

app.listen(3005);

console.log('server running on: 3005')