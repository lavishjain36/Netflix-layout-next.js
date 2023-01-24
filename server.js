const express=require("express");
const next=require("next");

const dev=process.env.NODE_ENV!== "production";
const app=next({dev});
const handle =app.getRequestHandler();

app.prepare().then(()=>{
    const server=express();
    server.use('/static/', express.static('path/to/static/files'));

    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    server.listen(3000,(err)=>{
        if(err)
        throw err;
        console.log("Ready and started on port 3000");
    })
})