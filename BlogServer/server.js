const express = require("express");

const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const mongoUri = "mongodb+srv://blog123:blog321@cluster0.w3xmqjt.mongodb.net/myBlog?retryWrites=true&w=majority"

mongoose.connect(mongoUri)
app.use(bodyParser.json())

////Schema///
const blogSchema = mongoose.Schema({
    id:Number,
    blog:String
})

const blog = mongoose.model("blog",blogSchema )

//////////////////////////////////////////////
app.get("/api/getblog/:id",(req,res)=>{
    blog.find({id:req.params.id},(err,doc)=>{
        if(err) return console.log(err)
        res.json(doc)
    })
})


app.get("/api/getblogs",(req,res)=>{
    blog.find((err,doc)=>{
        if(err) return console.log(err)
        res.json(doc)
    })
})

app.delete("/api/deleteblog/:id",(req,res)=>{
    blog.deleteOne({id:req.params.id},(err,doc)=>{
        if(err) return console.log(err)
        res.json("blog deleted")
    })
})

app.post("/api/updateblog",(req,res)=>{
    const id = req.body.id
    const blogContent = req.body.blog
    blog.updateOne({id:id},{
        $set:{blog:blogContent}},(err,doc)=>{
 if(err) return console.log(err)
res.json("blog updated")
        }) 

})

app.post("/api/addblog",(req,res)=>{
    const addblog = new blog({
        id:req.body.id,
        blog:req.body.blog

    })
    addblog.save((err,doc)=>{
        if(err)return console.log(err)
        res.json("successfully posted blog")
    })
    })

    




const port = process.env.POST || 4000
app.listen(port)
