const Publication = require("./models/Publication");

const seed = items => {
  return new Promise((resolve, reject) => {
    console.log("Adding items...");
    items.map(item => {
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

    resolve("Seed successful");
  });
};

module.exports = seed;
