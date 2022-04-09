class Usuario {
  constructor(
    nombre,
    apellido,
    libros = [{ nombre: "", autor: "" }],
    mascotas = [""]
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName(nombre, apellido) {
    return `El usuario es ${this.nombre} ${this.apellido}`;
  }

  addLibros({ nombre, autor }) {
    this.libros.push({ nombre, autor });
  }

  getNombresLibros() {
    this.libros.map((elemento) => {
      console.log(`${elemento.nombre}`);
    });
  }

  addMascotas(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }
}

//Crear instancia de usuario
const usuario1 = new Usuario(
  "Roberto",
  "Ojeda",
  [
    {
      nombre: "El señor de las moscas",
      autor: "William Golding",
    },
    {
      nombre: "Fundación",
      autor: "Isaac Asimov",
    },
  ],
  ["perro", "gato"]
);

//Lamada al método getFullName devuelve el nombre y el apellido del usuario1
console.log(usuario1.getFullName());

//Llamada al método addLibros agrega un libro al array de objetos Libros
usuario1.addLibros({
  nombre: "Crimen y Castigo",
  autor: "Fiodor Dostoievski",
});
console.log(usuario1.libros);

//LLamada al método getLibrosNombres devuelve los nombres de los libros
usuario1.getNombresLibros();

//Lamada al método addMascotas agregar una mascota al array de mascotas
usuario1.addMascotas("canario");
console.log(usuario1.mascotas);

//Llamada al método countMascotas  devuelve la cantidad de mascotas en el array
console.log(usuario1.countMascotas());
