const Hobbits = require("./hobbitsModel");
const db = require("../data/dbConfig.js");

beforeEach(async () => {
  await db("hobbits").truncate();
});

it("is running with the correct db", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("hobbitsModel.js", () => {
  describe("insert function", () => {
    it("inserts", async () => {
      // 0. read the db
      // 1. assert there is nothing in hobbits table
      // 2. insert somethins
      // 3. read the db
      // 4. assert there is one record

      let hobbits;
      hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(0);
      await Hobbits.insert({ name: "Christina" });

      hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);

      await Hobbits.insert({ name: "Alison" });
      // re-fetch hobbits from the database. DB don't reload autonatically
      hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });
  });
});
