const server = require("./server");
const request = require("supertest");

it("is running with the correct db", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("server.js", () => {
  describe("GET on /", () => {
    it("runs without errors", () => {
      return request(server)
        .get("/")
        .expect(200)
        .expect("Content-Type", /json/);
    });
  });

  describe("GET on /hobbits", () => {});
});
