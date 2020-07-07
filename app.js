//========================================================================================================================
//                                              ADDING FLASH MESSAGES
//========================================================================================================================

var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    methodOverride          = require("method-override");
    // flash                   = require("connect-flash");

// mongoose.connect("mongodb://localhost:27017/plant",{useNewUrlParser:true});
app.use(bodyParser.urlencoded({extended:true}));
                                            // For CSS FILE
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
// app.use(flash());


app.get("/", function(req , res){
    res.redirect("/home");
});

app.get("/home", function(req, res){
    res.render("home");
});

app.listen(3001,function(){
    console.log("Connected you son a bitch");
});

