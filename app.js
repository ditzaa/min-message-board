const express = require("express");
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");

const app = express();
const stylesPath = path.join(__dirname, "styles");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(stylesPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

// error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mini message board - listening on port ${PORT}!`);
});
