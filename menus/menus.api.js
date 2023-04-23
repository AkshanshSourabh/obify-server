const router = require('express').Router()
const service = require('./menus.service')

router.get("/", async function(req, res){   //first para is end point name and 2nd is callback function
    try {
        let list = await service.list() //for handling the exception we need catch and try
        res.send(list)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get("/:id", async function(req, res){
    try {
        let menu = await service.get(req.params.id) //id is present in url
        res.send(menu)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.post("/", async function(req, res){
    try {
        let menu = await service.create(req.body) //id is present in url
        res.send(menu)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.put("/:id", async function(req, res){
    try {
        let menu = await service.update(req.params.id, req.body) //id is present in url
        res.send(menu)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/:id", async function(req, res){
    try {
        await service.delete(req.params.id) //id is present in url
        res.send({msg: "Menu Deleted Successfully"})
    }
    catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router