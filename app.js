const express = require("express");
const bodyParser = require ("body-parser");

const app = express();
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));
let day="";
let items =[];
app.get("/",function(req,res){
    let today= new Date();
    let options={
        weekday : "long",
        day : "numeric",
        month :"long"
    };
    day=today.toLocaleDateString("en-US",options);
    res.render("list",{day:day,items:items});
});
app.post("/",function(req,res){
        items.push(req.body.newItem);
    res.redirect("/");
});
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
});
