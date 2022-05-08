const { Router } = require("express");
const router = Router();

const productos = [];
const _ = require("underscore");

//Obtener Todos los productos 
router.get('/', (req, res) => {
  res.json(productos)
})

//Obtener un producto específico por el id
router.get('/:id', (req, res) => {
 
  const { id } = req.params
  _.each(productos, (producto, i) => {
    if (producto.id == id) {
      res.json(producto)
      return
    }
     res.status(404).send('Producto NO encontrado')
    })
       
})

//Agregar un producto nuevo al array
router.post('/', (req, res) => {
 
 const { title, price, thumbnail } = req.body
 if (title && price && thumbnail) {
   const id = productos.length + 1
   const newProducto = { ...req.body, id }
   productos.push(newProducto);
   res.json(productos)
 } else {
   res.status(500).json({ error: "Ha ocurrido un error" })
 }

})

//Modificar un producto 
router.put('/:id', (req, res) => {
   const { id } = req.params
    const { title, price, thubmnail } = req.body
    if (title && price && thumbnail) {
        _.each(productos, (producto, i) => {
            if (producto.id == id) {
                producto.title = title
                producto.price = price
                producto.thubmnail = thubmnail
            }
        })
        req.json(productos)
    } else {
        res.status(404).json({error: 'Producto No encontrado' })
    }
});

//Eliminar un producto 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  _.each(productos, (producto, i) => {
    if (producto.id == id) {
      productos.splice(i, 1)
      req.json(productos)
    }
    res.json({'error': `Producto con id ${id} Eliminado`})
  })
    
});

module.exports = router
