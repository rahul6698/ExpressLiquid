const express = require("express");
const { Liquid } = require("liquidjs");

const app = express();
const engine = new Liquid({
    root: __dirname,
    extname : '.liquid'
});

app.engine('liquid' , engine.express());
app.set('views',['./partials', './views','./publics'])
app.set('view engine', 'liquid');

app.get("/",(req,res) => {
    res.render("index",{ 
        title: 'liquidjs!',
        name: req.query.name 
    })
});

app.get("/login",(req,res) => {
    res.render("login",{ 
        title: 'Login',
        name: req.query.name
    })
});

// app.get("/publics",(req,res) => {
//     res.write("hello");
//     res.end();
// });

app.get("*",(req,res) => {
    res.render("404");
});

module.exports = app