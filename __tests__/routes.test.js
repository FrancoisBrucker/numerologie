const request = require('supertest');

const app = require('../app')

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