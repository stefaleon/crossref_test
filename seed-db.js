const fetchData = require("./fetchData");
const Publication = require("./models/Publication");

const seedDb = async () => {
  try {
    const items = await fetchData();
    console.log("Adding items...");
    items.forEach(async item => {
      const newPublication = new Publication({
        doi: item.DOI,
        title: item.title[0],
        issn: item.ISSN
      });

      await newPublication.save();
      console.log(".");
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

require("./db");
seedDb();
