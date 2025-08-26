let express=require("express")


let app=express()
app.use(express.json())

app.get("/",(req,res)=>
{
    res.send({status:1,msg:"Home page api"})
})

app.get("/news",(req,res)=>
{
    res.send({status:2,msg:"News Page api test"})
})

app.post("/login",(req,res)=>
{
    console.log(req)
    console.log(req.body)
    res.send({status:2,msg:"Login api test(post api cannot be directly displayed in browser!)"
        ,body:req.body,queryData:req.query})
})


app.get("/paramtest/:id",(req,res)=>
{
    let currentId=req.params.id
    res.send("Params Api call with dynamic id"+currentId)
})

app.listen("8000")