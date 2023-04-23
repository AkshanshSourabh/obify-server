const { Schema, model } = require("mongoose");

const menuSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String
})

module.exports = model('Menu', menuSchema)