const seed = require("../seed");

const Publication = require("../models/Publication");

const data = require("./data");
const testdata = [data[0]];

beforeEach(async () => {
  require("../db");
  // await Publication.deleteMany();
  // await seed(testdata);
});

test("verify seeded test data doi", async () => {
  const users = await Publication.find();

  expect(users[0].doi).toEqual("10.22175/mmb2017.10.0050");
});
