const axios = require("axios");
const url = "http://api.crossref.org/works/";
const options = {
  method: "GET",
  headers: {
    Host: "api.crossref.org",
    Connection: "keep-alive",
    "Upgrade-Insecure-Requests": 1,
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
  }
};

const fetchData = async () => {
  try {
    const res = await axios.get(url, options);

    const items = res.data.message.items;

    return items;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = fetchData;
