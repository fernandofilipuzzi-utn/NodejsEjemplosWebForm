var express = require("express");
var path = require("path");
const cors = require('cors');

var app = express();
app.use(cors()); // Permitir todas las solicitudes CORS

var staticPath = path.resolve(__dirname, "public");
app.use(express.static(staticPath));

// Ruta para el archivo index.html
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/form", function (req, res) {
    var numero=req.query.numero;
    var texto=req.query.texto;
    console.log(numero +'-'+texto)
});

app.listen(3000, function(){
    console.log("Express app started on port 3000");
});