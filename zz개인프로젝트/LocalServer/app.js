const express = require("express");
const app = express();




// 심플데이터를 서버에 메모리에다가 저장
const simpleData = [
    {
        id : 1,
        champion : "Nami",
        postion : "supporter",
    },
]

//메인
app.get("/",function(req, res){
    res.send("hello world!!");
});

app.get("/cham", (req, res)=>{
    res.send(simpleData);
    
})

app.post("/cham", (req, res)=>{
    let {champion, postion} = req,body;
    simpleData.push({
        id : 2,
        champion,
        postion,
    })

})

app.listen(3500, ()=>{
    console.log("server start port:3500")
});