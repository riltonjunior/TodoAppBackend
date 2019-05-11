const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.get("/", function(req, res) {
  res.send("Backend funcionando.");
});

server.listen(port, function() {
  console.log(`Backend esta rodando na porta ${port}.`)
})

module.exports = server

