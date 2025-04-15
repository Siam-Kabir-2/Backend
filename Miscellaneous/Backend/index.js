const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded());
app.use(express.json());

app.get("/request",(req,res)=>{
    let {user,pass}=req.query;
    console.log(user);
    res.send(`Standard GET Request from @${user}`)
})
app.post("/request",(req,res)=>{
    let {user,pass}=req.body;
    // console.log(req.body);    
    res.send(`Standard POST Request from @${user}`)

})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});
