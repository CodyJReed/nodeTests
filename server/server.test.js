const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

it("should return hello world response", done => {
  request(app)
    .get("/")
    .expect(200)
    .expect(res => {
      expect(res.body).toInclude({
        error: "Page not found"
      });
    })
    .end(done);
});

it("should return user object", done => {
  request(app)
    .get("/users")
    .expect(200)
    .expect(res => {
      expect(res.body).toInclude({
        name: "Cody",
        age: 33
      });
    })
    .end(done);
});
