const request = require('supertest');

process.env.NODE_ENV = 'test'

const db = require("../db")
const app = require('../app');

beforeEach(async () => {
    await db.sequelize.sync({force: true})
    for (i=1 ; i <10 ; i +=1) {
        await db.model.Signification.create({
            message: i,
            nombre: i,
        })
    }
})

test('GET /prénom?valeur=toto pas de prénom', (done) => {
    request(app)
        .get(encodeURI("/prénom") + "?valeur=toto")
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual({"prénom":"toto","chiffre":4,"message":"4"})
        })
        .end((err, res) => {
            if (err) {
                return done(err)
            }
            return done()
        })
})
