const mongoose = require("mongoose");

const PublicationSchema = mongoose.Schema({
  doi: {
    type: String
  },
  title: {
    type: String
  },
  issn: {
    type: [String]
  }
});

module.exports = mongoose.model("Publication", PublicationSchema);
