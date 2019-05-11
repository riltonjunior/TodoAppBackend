const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo', { useMongoClient: true }).catch(err => console.error(err))
