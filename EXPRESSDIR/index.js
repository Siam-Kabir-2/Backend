const express = require("express");
const app = express();

// console.dir(app);

let port = 8080; //8080

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("You contracted root Path");
});

app.get("/:username/:id",(req,res)=>{
 let {username,id}=req.params;
 console.log(req.params);
  res.send(`<h1>Username : ${username}<br/> ID : ${id}</h1>`);
})

app.get("/search",(req,res)=>{
  let {q }=req.query;
  if(!q){
    res.send("Nothing Searched");
  }
  res.send(q);
})


// app.get("/apple", (req, res) => {
//   res.send("You contracted apple Path");
// });
// app.post("/",(req,res)=>{
//   res.send("You sent a post request!");
// });
// app.use((req,res)=>{
//   res.send("THis path Doesn't Exist!");
// });

//---------------app.use() listens all requ ests--------------//
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request recieved");
//     // res.send("THis is basic response!")

//     // res.send({
//     //     name:"apple",
//     //     price:"100$"
//     // })
//     let code="<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li><li>Banana</li></ul>";
//     res.send(code);
// })
