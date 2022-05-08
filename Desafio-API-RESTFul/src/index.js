const express = require("express");
const app = express();
const morgan = require("morgan");
const routeProductos = require("./Routes/productos.js") 


//settings
app.set("port", process.env.PORT || 8000);

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

//Routes
app.use('/api/productos', routeProductos);

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server escuchando en puerto ${app.get("port")}`);
})
