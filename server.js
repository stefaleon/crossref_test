const express = require("express");
const helmet = require("helmet");

const connectToDb = require("./db");

const publicationsRoutes = require("./routes/publications");

const PORT = process.env.PORT || 5000;

const app = express();

connectToDb();

app.use(helmet());

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => res.json({ msg: "This is the Publications API" }));

app.use("/articles", publicationsRoutes);

app.listen(PORT, process.env.IP, () =>
  console.log(`Server started on port ${PORT}`)
);
