const request = require('supertest');
const { JSDOM } = require('jsdom')

const app = require('../app')

describe("routes statiques", () => {
    test("GET /", (done) => {
        request(app)
            .get("/")
            .expect("Content-Type", "text/plain; charset=utf-8")
            .expect(301)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                return done()
            })
    })

    test("GET /index.html 404", (done) => {
        request(app)
            .get("/index.html")
            .expect(404)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                return done()
            })
    })

    test("GET /static/index.html", (done) => {
        request(app)
            .get("/static/index.html")
            .expect("Content-Type", "text/html; charset=UTF-8")
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                return done()
            })
    })
    test("GET /static/prenoms.html", (done) => {
        request(app)
            .get("/static/prenoms.html")
            .expect("Content-Type", "text/html; charset=UTF-8")
            .expect(200)
            .expect((res) => {
                dom = new JSDOM(res.text)
                expect(dom.window.document.querySelector("#main > p").textContent).toBe("Chargement des prénoms...")
            })
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                return done()
            })
    })
})
