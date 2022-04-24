const fs = require("fs");

//Start class Contenedor
class Contenedor {
  constructor(file) {
    this.file = file;
  }

  async save({ title, price, thumbnail }) {
    try {
      let info = await fs.promises.readFile(this.file);
      let infoUtil = JSON.parse(info);
      let lastElement = infoUtil[infoUtil.length - 1].id;
      let id = lastElement + 1;
      let newContenido = { title, price, thumbnail, id };
      let newInfo = JSON.stringify(newContenido);
      await fs.promises.appendFile(this.file, newInfo, "utf-8");
      console.log(newContenido);
      console.log("Se agrego un nuevo producto");
    } catch (err) {
      console.error("Error", err);
    }
  }

  async getById(id) {
    try {
      let info = await fs.promises.readFile(this.file);
      let infoUtil = JSON.parse(info);
      let productoId = infoUtil.find((e) => e.id === id);
      console.log(productoId);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async getAll() {
    try {
      let info = await fs.promises.readFile(this.file);
      let infoUtil = JSON.parse(info);
      console.log(infoUtil);
    } catch (err) {
      console.error("Error", err);
    }
  }

  async deleteById(id) {
    try {
      let info = await fs.promises.readFile(this.file);
      let infoUtil = JSON.parse(info);
      let producto = infoUtil.slice(id);
      let array = JSON.stringify(producto);
      let contenido = await fs.promises.writeFile(this.file, array, "utf-8");
      console.log(`Se elimino el producto con id ${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.file, "", "utf-8");
      console.log("Se borraron TODOS los productos!");
    } catch (err) {
      console.error("Error", err);
    }
  }

  //End class Contenedor
}

module.exports = Contenedor;
