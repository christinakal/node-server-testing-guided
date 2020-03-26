const server = require("./server");
const request = require("supertest");

it("is running with the correct db", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("server.js", () => {
  describe("GET on /", () => {
    it("runs without errors", () => {
      return (
        request(server)
          .get("/")
          .expect(200)
          .expect("Content-Type", /json/)
          .expect("Content-Length", "12")
          // referece server.js line 10
          .expect({ api: "up" })
      );
    });
  });

  describe("GET on /hobbits", () => {
    it("runs withous errors", () => {
      return request(server)
        .get("/hobbits")
        .then(res => {
          expect(res.statusCode).toBe(200);
          //   expect("Content-Type", /json/);
        });
    });
  });
});
