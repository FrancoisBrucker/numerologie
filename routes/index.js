let express = require('express');

const numerologie = require('../back/numerologie');
const db = require("../db")

let router = express.Router();

router.get(encodeURI('/prénom'), (req, res) => {
    console.log(req.query)
    prenom = req.query["valeur"]
    chiffre = numerologie.chiffre(prenom)
    db.model.Prenoms.findOne({
        where: {
            prenom: prenom
        }
    }).then((data) => {
        if (data === null) {
            db.model.Prenoms.create({
                prenom: prenom
            })
        }
        console.log(data)
    })
    db.model.Signification.findOne({
        where: {
            nombre: chiffre
        }
    }).then((data) => {
        res.json({
            prénom: prenom,
            chiffre: chiffre,
            message: data.message
        })
    })
})

router.get('/api/prenoms/read', (req, res) => {
    db.model.Prenoms.findAll()
        .then((data) => {
            var liste = []
            for (element of data) {
                liste.push({
                    prenom: element.prenom,
                    chiffre: numerologie.chiffre(element.prenom)
                })
            }
            res.json(liste)
        })
})


module.exports = router
