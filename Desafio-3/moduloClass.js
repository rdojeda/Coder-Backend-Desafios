const fs = require("fs");

//Start class Contenedor
class Contenedor {
  constructor(file) {
    this.file = file;
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
  

  //End class Contenedor
}

module.exports = Contenedor;
