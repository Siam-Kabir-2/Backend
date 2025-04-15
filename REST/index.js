const express = require("express");
const app=express();
const port = 8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override")

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id: uuidv4(),
        username: "siam",
        content: "I hate coding!",
    },
    {
        id: uuidv4(),
        username: "alex",
        content: "Just deployed my first app 🚀",
    },
    {
        id: uuidv4(),
        username: "lina",
        content: "JavaScript is both fun and frustrating 😅",
    },
    {
        id: uuidv4(),
        username: "mike",
        content: "Anyone else struggling with async/await?",
    },
    {
        id: uuidv4(),
        username: "tara",
        content: "Just finished a 100-day coding challenge! 💪",
    },
    {
        id: uuidv4(),
        username: "niko",
        content: "React or Vue? Can’t decide...",
    }
];


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
   let {username,content}=req.body;
   let id=uuidv4();
   posts.push({id,username,content});
   res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let post=posts.find((p)=>id===p.id);
    console.log(post);
    res.render("show.ejs",{ post });
})
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});