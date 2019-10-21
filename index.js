const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const DataReports = require("./AirtimeReport");


const app = express();

const dataReports =  DataReports();
const handlebarsSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: "./views",
    layoutsDir: "./views/layouts"
});
app.engine('handlebars', handlebarsSetup);
app.set("view engine", "Handlebars")

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(bodyParser.json())

app.use(express.static("public"))

app.set('view engine', 'handlebars');

app.get("/", function (req, res) {
   
});




let PORT = process.env.PORT || 3000;


app.listen(PORT, function () {
    console.log("app", PORT)
});
