const prompt = require('prompt-sync')();

//Objetivo: Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, aplicando los conceptos fundamentales de JavaScript vistos en el módulo.

/*
1. Estructura de Datos
a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
✔ id (número)
✔ título (string),
✔ autor (string),
✔ año (número),
✔ género (string),
✔ disponible (booleano).
b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
✔ id (número)
✔ nombre (string)
✔ email (string)
✔ librosPrestados (array de ids de libros).
*/

/* Un array es una estructura de datos que sirve para guardar varios valores relacionados en una sola variable. Un array puede guardar cualquier tipo de dato.
Para este ejercicio se crean dos arrays, uno que contiene libros y otro va a contener usuarios. Cada elemento es un objeto con atributos concretos dados en el enunciado, los tipos de dato de los atributos son string, number y boolean. También hay un atributo que contiene array, una estructura de datos.*/

//Array de objetos Libros
let libros = [
    {
        id: 1,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J. K. Rowling",
        anio: 1997,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 2,
        titulo: "La espada rota",
        autor: "Tad Williams",
        anio: 1988,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 3,
        titulo: "El señor de los anillos",
        autor: "J. R. R. Tolkien",
        anio: 1954,
        genero: "Fantasía épica",
        disponible: true
    },
    {
        id: 4,
        titulo: "Las ventajas de ser invisible",
        autor: "Stephen Chbosky",
        anio: 1999,
        genero: "Juvenil",
        disponible: false
    },
    {
        id: 5,
        titulo: "Los pilares de la Tierra",
        autor: "Ken Follett",
        anio: 1989,
        genero: "Histórica",
        disponible: true
    },
    {
        id: 6,
        titulo: "El trono de huesos",
        autor: "Tad Williams",
        anio: 2017,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 7,
        titulo: "Las crónicas de Narnia",
        autor: "C. S. Lewis",
        anio: 1950,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 8,
        titulo: "Eragon",
        autor: "Christopher Paolini",
        anio: 2002,
        genero: "Fantasía",
        disponible: false
    },
    {
        id: 9,
        titulo: "El elfo oscuro",
        autor: "R. A. Salvatore",
        anio: 1990,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 10,
        titulo: "Crepúsculo",
        autor: "Stephenie Meyer",
        anio: 2005,
        genero: "Fantasía romántica",
        disponible: false
    }
];

//Array de objetos Usuario
let usuarios = [
    {
        id: 1,
        nombre: "Ana Deferrari",
        email: "ana94@gmail.com",
        librosPrestados: [3, 5]
    },
    {
        id: 2,
        nombre: "Lucio Giraldez",
        email: "lgiraldez@yahoo.com.ar",
        librosPrestados: []
    },
    {
        id: 3,
        nombre: "Lucía Hitz",
        email: "lucia.hitz@gmail.com",
        librosPrestados: [9]
    },
    {
        id: 4,
        nombre: "Bastian Díaz",
        email: "bast_d@gmail.com",
        librosPrestados: [1, 6]
    },
    {
        id: 5,
        nombre: "Ho Win Chu",
        email: "howin@hotmail.com",
        librosPrestados: []
    }
];

/*
2. Funciones de Gestión de Libros
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
*/

/*
3. Gestión de Usuarios
a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
*/

/*
4. Sistema de Préstamos
a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
*/

/*
5. Reportes
a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .fi lter(), .reduce()) para generar un reporte con la siguiente información:
✔ Cantidad total de libros.
✔ Cantidad de libros prestados.
✔ Cantidad de libros por género.
✔ Libro más antiguo y más nuevo
*/

/*
6. Identificación Avanzada de libros
a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
*/

/*
7. Cálculos Estadísticos
a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
✔ Promedio de años de publicación de los libros.
✔ Año de publicación más frecuente.
✔ Diferencia en años entre el libro más antiguo y el más nuevo.
*/

/*
8. Manejo de Cadenas
a) Crear una función normalizarDatos() que utilice métodos de strings para:
✔ Convertir todos los títulos a mayúsculas.
✔ Eliminar espacios en blanco al inicio y final de los nombres de autores.
✔ Formatear los emails de los usuarios a minúsculas.
*/

/*
9. Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
*/

/*
10. Comentando mi código
a) Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código.
b) Deberán seccionar el código punto por punto y con una explicación corta y simple de que hicieron en cada punto. (tal cómo comentaba el código de los ejercicios de cada clase)
*/
