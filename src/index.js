const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db=require('./config/db');

//connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");
app.set("views", path.join(__dirname, 'resources','views'));

//Routes init: khoi tạo tuyến đường
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
  //   console.log(`Example app listening on port ${port}`)
  console.log(`App listening at http://localhost:${port}`);
});
