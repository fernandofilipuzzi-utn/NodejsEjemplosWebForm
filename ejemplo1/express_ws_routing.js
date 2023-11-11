var express = require("express");
var path = require("path");

var app = express();

var staticPath = path.resolve(__dirname, "public");
app.use(express.static(staticPath));

// Ruta para el archivo index.html
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/form2", function (req, res) {
    var texto=req.query.numero;
    console.log(texto)
});

app.listen(3000, function(){
    console.log("Express app started on port 3000");
});