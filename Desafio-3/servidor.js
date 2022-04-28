const Contenedor = require('./moduloClass.js')

const newInstance = new Contenedor('./productos.txt')

const getAll = newInstance.getAll()

const getById = newInstance.getById(1)

const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.urlencoded());
app.use(express.json());

app.get("/productos", (req, res) => {
  res.send(getAll);
    
});

app.get("/productoRandom", (req, res) => {
  res.send(getById);
});

app.all('*', (req, res) => {
  res.status(404).send('Página no encontrada!')
})

app.listen(8080, () => {
    console.log(`Servidor http escuchando en puerto ${PORT}`);
});


