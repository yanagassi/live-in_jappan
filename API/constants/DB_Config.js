const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/minha_comida').then(
  ()=>{},
  err =>{console.log("Erro na conexão com o banco de dados !",err);}
);

  
module.exports = mongoose 