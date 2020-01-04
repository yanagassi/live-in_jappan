const express = require('express');
const router = express.Router();
const Login = require("../schema/Login");

router.get('/', (req, res) => {
    res.send(JSON.stringify({ status: "sucess", msg: "API rodando." }));
})

router.post('/login', (req, res)=>{
    const {email, password} = req.body;
    Login.findOne({email})
    .then(( resposta )=>{
        console.log(password , resposta.pass)
        if(resposta  != null && password == resposta.pass ){
            res.send(
                JSON.stringify({
                    status : 'sucess',
                    token:resposta.token, 
                    dados : resposta
                })
            )
        }
        else{
            res.send(
                JSON.stringify({
                    status : 'error',
                    data:resposta
                })
            )
        }
         
    })  

})
 
module.exports = router;
