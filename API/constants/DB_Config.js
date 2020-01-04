const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projeto_test').then( // aqui voce define o nome do banco de dados.
  ()=>{},
  err =>{console.log("Erro na conexão com o banco de dados !",err);}
);

module.exports = mongoose 