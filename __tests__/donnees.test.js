const request = require('supertest');



jest.mock("../db", () => {
    const originalModule = jest.requireActual('../db');
    return {
        __esModule: true,
        ...originalModule,
        model: {
            Prenoms: {
                findAll: () => {
                    return new Promise((resolve, reject) => {
                        resolve([{ prenom: "toto" }])
                    })
                }
            }
        },
    };
});

const numerologie = require("../back/numerologie")
const app = require('../app')

test('GET /api/prenoms/read', (done) => {

    request(app)
        .get("/api/prenoms/read")
        // .expect("Content-Type", "application/json; charset=utf-8")
        .expect((res) => {
            expect(res.body).toEqual([{
                prenom: "toto",
                chiffre: numerologie.chiffre("toto")
            }])
        })
        .end((err, res) => {
            if (err) {
                return done(err)
            }
            return done()
        })

})