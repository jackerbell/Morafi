const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/hello',(req,res)=>{
    console.log('/hello')
})

app.get('/movie',(req,res)=>{
    console.log('/movie')
    db.query(`select * from moviedb where 개봉일 >= "2022년 1월 1일"`,(err,data)=>{
        if(!err){
            //console.log(data)
            res.send(data)
            console.log(data)
        }else{
            console.log(err)
        }
    })
})



app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})