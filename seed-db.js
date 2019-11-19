const fetchData = require("./fetchData");
const connectToDb = require("./db");
const Publication = require("./models/Publication");

const seedDb = async () => {
  try {
    await connectToDb();

    const items = await fetchData();

    items.forEach(async item => {
      const newPublication = new Publication({
        doi: item.DOI,
        title: item.title[0],
        issn: item.ISSN
      });

      await newPublication.save();
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

seedDb();
// module.exports = seedDb;
