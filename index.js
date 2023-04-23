const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser')//initialise bodyguard
const { default: mongoose } = require('mongoose')
const Menu = require('./menus/Menu')
const app = express()
app.use(bodyParser.json())// body guard assigned and given task to concert json
// app.use(cors())

app.get("/", async function(req, res){//first is arrow parameter
    let list = await Menu.find() //await used cause it was a promise
    res.send(list)//when any server wants to communicate client
})


mongoose.connect('mongodb://localhost:27017/obify').then(()=>{
    console.log('Connected to DB')
})
// app.get("/", (req, res)=> {//first is arrow parameter
//     res.send("Welcome to librarian server")//when any server wants to communicate client
// })

app.post("/", async (req, res)=>{
    try{ 
        let menu = Menu(req.body)//data send to book model , payload added
        await menu.save()//saved to db,,,,,await and async keyword instead of catch error or then
        // console.log(req.body);
        res.send(menu)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
})

app.use('/api/menus', require('./menus/menus.api'))  //api end point jidhar req aani chahiye is the 1st parar, 2nd one is where the data is redirected to

app.listen(3000,function(){
    console.log("Server started on port 3000");
})