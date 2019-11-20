const fetchData = require("./fetchData");
const Publication = require("./models/Publication");
const seed = require("./seed");

const seedDb = async () => {
  try {
    const items = await fetchData();
    seed(items);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const doSeed = async () => {
  require("./db");
  await Publication.deleteMany();
  const msg = await seedDb();
  console.log(msg);
};

doSeed();
