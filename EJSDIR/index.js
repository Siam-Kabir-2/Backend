const express = require("express");
const app = express();
const path=require("path");

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.use('/public', express.static('public'));

app.listen(port,()=>{
    console.log(`Listening on port ${port}  Directory : ${__dirname}`)
})

app.get("/hello",(req,res)=>{
    res.send("hello");
    
})
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const igData=require("./data.json");
    const data=igData[username];
    // console.log(data);
    if(data) res.render("instagram.ejs",{data});
    else res.render("error.ejs",{username})
    
})
app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1 ;
    res.render("rolldice.ejs",{diceVal});
    
})
app.get("/",(req,res)=>{
    res.render("home");
})