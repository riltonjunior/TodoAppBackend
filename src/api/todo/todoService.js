const Todo = require('./todo')

// cria os metodos e gera as autorizacoes para atualizacao
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo