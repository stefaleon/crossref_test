const express = require("express");
const helmet = require("helmet");

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, process.env.IP, () =>
  console.log(`Server started on port ${PORT}`)
);
