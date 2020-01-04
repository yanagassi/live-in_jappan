const mongoose =  require("../constants/DB_Config");
const Login_schema = mongoose.Schema({
    _id: String,
    email: String,
    pass: String,
    token: String,
    nome: String
},
{
    collection: "login"
})

module.exports = mongoose.model("login", Login_schema);

