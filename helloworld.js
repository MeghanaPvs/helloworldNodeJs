const express= require('express');//importing express
var app=express(); //Calling express function ; where app is an object 

let sample={
    name:"Meghana",
    age:"21",
    msg:"Hello World"
}

app.get('/',(req,res)=>{
    res.send(sample);
})


app.listen(3000,function(){
    console.log('APP listening on Port 3000')
})
//liten on port no. 3000