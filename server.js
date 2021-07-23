const express = require('express');
const mongoose = require("mongoose");
const logger = require("morgan")

const PORT = process.env.PORT || 3000

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/api.js"));
app.use(require("./routes/index.js"))
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/localhost",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);


// start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

