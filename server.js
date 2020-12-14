const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));

const routes = require("./controllers/index.js");
app.use(routes);

app.listen(PORT, () => {
  console.log("Server listening on PORT: " + PORT);
});
