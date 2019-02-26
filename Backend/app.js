const express = require('express');
const bodyParser = require("body-parser");
const User = require("./user");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/usersdB', {useNewUrlParser: true}, function(err, db) {
  if (err) {
      console.log('Unable to connect to the server. Please start the server. Error:', err);
  } else {
      console.log('Connected to Server successfully!');
  }
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use(require("express-session")({
  secret: "temp string hai ye",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES

app.post("/signup",function(req, res){
  console.log("REQUEST");
  console.log(req.body.username);
  console.log(req.body.password);
  User.register(new User({username : req.body.username}), req.body.password, function(err, res){
    if(err){
      console.log(err);
    }
    passport.authenticate('local')(req, res, function(){

    })
  })
});

app.post("/login", passport.authenticate('local') , function(req, res){
  console.log("Success");
  if(req.isAuthenticated()){
    res.json({
      status: true,
    });
    console.log("true LOGIN");
  }
  else{
    res.json({
      status: false,
    });
    console.log("false LOGIN");
  }
});

app.get("/logout", function(req, res){
  req.logout();
  if(req.isAuthenticated()){
    res.json({
      status: true,
    });
    console.log("true LOGOUT");
  }
  else{
    res.json({
      status: false,
    });
    console.log("false LOGOUT");
  }
});

app.get("/islogged", function(req, res){
  if(req.isAuthenticated()){
    res.json({
      status: true,
    });
    console.log("true LOGGED");
  }
  else{
    res.json({
      status: false,
    });
    console.log("false LOGGED");
  }
});


module.exports = app;
