const express = require('express');
const router = express.Router();
const Promo = require('../schema/promo');
const Categorias = require('../schema/categorias');
const Cardapio = require('../schema/cardapio');
const Complementos = require('../schema/complementos');
const Estabelecimento = require('../schema/dados_estabelecimento');

router.get('/', (req, res) => {
    res.send(JSON.stringify({ status: "sucess", msg: "API rodando." }));
})

router.post('/search', ({ body }, res) => {
    const { idApp, search } = body;
    if (!idApp || !search)
        res.send(JSON.stringify({ status: 'error', msg: "parametros faltando." }));
    Cardapio.find({ idApp, nome: new RegExp(search), })
        .then((data) => {
            if (data.length > 0) {
                res.send(JSON.stringify({ status: "sucess", data }));
            } else {
                res.send(JSON.stringify({ status: 'error', message: 'Nada encontrado !' }));
            }
        })
        .catch((err) => {
            res.send(JSON.stringify({ status: 'error', err }));
        })
});


router.post('/carrousel', ({ body }, res) => {
    const { idApp } = body;
    if (!idApp)
        res.send(JSON.stringify({ status: 'error', msg: "parametros faltando." }));
    Promo.find({ idApp })
        .then((data) => {
            if (data.length > 0) {
                res.send(JSON.stringify({ status: "sucess", data }));
            } else {
                res.send(JSON.stringify({ status: 'error', message: 'Nada encontrado !' }));
            }
        })
        .catch((err) => {
            res.send(JSON.stringify({ status: 'error', err }));
        })



    router.post('/categorias', ({ body }, res) => {
        const { idApp } = body;
        if (!idApp)
            res.send(JSON.stringify({ status: 'error', msg: "parametros faltando." }));
        Categorias.find({ idApp })
            .then((data) => {
                if (data.length > 0) {
                    console.log(data)
                    res.send(JSON.stringify({ status: "sucess", data }));
                } else {
                    res.send(JSON.stringify({ status: 'error', message: 'Nada encontrado !' }));
                }
            })
            .catch((err) => {
                res.send(JSON.stringify({ status: 'error', err }));
            })
    });

    router.post('/cardapio', ({ body }, res) => {
        const { idApp } = body;
        if (!idApp)
            res.send(JSON.stringify({ status: 'error', msg: "parametros faltando." }));
        Cardapio.find({ idApp })
            .then((data) => {
                if (data.length > 0) {
                    res.send(JSON.stringify({ status: "sucess", data }));
                } else {
                    res.send(JSON.stringify({ status: 'error', message: 'Nada encontrado !' }));
                }
            })
            .catch((err) => {
                res.send(JSON.stringify({ status: 'error', err }));
            })
    });

});


router.post('/complemento', ({ body }, res) => {
    const { idApp } = body;
    if (!idApp)
        res.send(JSON.stringify({ status: 'error', msg: "parametros faltando." }));
    Complementos.find({ idApp })
        .then((data) => {
            if (data.length > 0) {
                res.send(JSON.stringify({ status: "sucess", data }));
            } else {
                res.send(JSON.stringify({ status: 'error', message: 'Nada encontrado !' }));
            }
        })
        .catch((err) => {
            res.send(JSON.stringify({ status: 'error', err }));
        })
});


router.post('/estabelecimento', ({ body }, res) => {
    const { idApp } = body;
    if (!idApp)
        res.send(JSON.stringify({ status: 'error', msg: "parametros faltando." }));
    Estabelecimento.find({ idApp })
        .then((data) => {
            if (data.length > 0) {
                res.send(JSON.stringify({ status: "sucess", data }));
            } else {
                res.send(JSON.stringify({ status: 'error', message: 'Nada encontrado !' }));
            }
        })
        .catch((err) => {
            res.send(JSON.stringify({ status: 'error', err }));
        })

});


module.exports = router;
