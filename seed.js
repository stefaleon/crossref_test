const Publication = require("./models/Publication");

const seed = items => {
  console.log("Adding items...");
  items.forEach(item => {
    const newPublication = new Publication({
      doi: item.DOI,
      title: item.title[0],
      issn: item.ISSN
    });

    newPublication
      .save()
      .then(result => console.log("."))
      .catch(err => {
        console.error(err.message);
        process.exit(1);
      });
  });
  return new Promise((resolve, reject) => resolve("Seed successful"));
};

module.exports = seed;
