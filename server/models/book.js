const mongoose = require('mongoose')
const Schema = mongoose.Schema




const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})


// model creation and exports 
module.exports = mongoose.model('Book', bookSchema)