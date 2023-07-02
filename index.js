const express = require("express");
const app = express();
app.get("/",(req,res) => {
    res.send("i am endpoint");
});

app.listen(7777,()=>{
    console.log("listening 7777");
});
