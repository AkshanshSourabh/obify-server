const Menu = require("./Menu")

module.exports.list = async function(){
    return await Menu.find()    //await is used because find() is returning the promise only
}

module.exports.get = async function(id){
    return await Menu.findById({_id:id})  //parameter filter or like your mongo function
}

module.exports.create = async function(payload){
    let menu = Menu(payload) // cause we are making new instance we need to make a new object as menu, and payload input usme store hoga or instance level method
    return await menu.save()
}

module.exports.update = async function(id, payload){
    return await Menu.findByIdAndUpdate({_id:id}, payload, {new:true}) //
}

module.exports.delete = async function(id){
    await Menu.findByIdAndDelete({_id:id}) //class level method
}