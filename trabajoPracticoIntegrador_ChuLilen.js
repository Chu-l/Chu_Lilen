const prompt = require('prompt-sync')();

//Objetivo: Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, aplicando los conceptos fundamentales de JavaScript vistos en el módulo.

//•┈┈┈••✦ EJERCICIO 1 ✦••┈┈┈•//

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
Para este ejercicio se crean dos arrays, uno que contiene libros y otro va a contener usuarios. Cada elemento es un objeto con propiedades concretas dadas en el enunciado, los tipos de datos de las propiedades son string, number, boolean (simples) y array (complejo).*/

//Array de objetos Libros
let libros = [
    {
        id: 1,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J. K. Rowling",
        anio: 1997,
        genero: "Fantasía",
        disponible: false
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
        disponible: false
    },
    {
        id: 4,
        titulo: "Las ventajas de ser invisible",
        autor: "Stephen Chbosky",
        anio: 1999,
        genero: "Juvenil",
        disponible: true
    },
    {
        id: 5,
        titulo: "Los pilares de la Tierra",
        autor: "Ken Follett",
        anio: 1989,
        genero: "Histórica",
        disponible: false
    },
    {
        id: 6,
        titulo: "El trono de huesos",
        autor: "Tad Williams",
        anio: 2017,
        genero: "Fantasía",
        disponible: false
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
        disponible: true
    },
    {
        id: 9,
        titulo: "El elfo oscuro",
        autor: "R. A. Salvatore",
        anio: 1990,
        genero: "Fantasía",
        disponible: false
    },
    {
        id: 10,
        titulo: "Crepúsculo",
        autor: "Stephenie Meyer",
        anio: 2005,
        genero: "Fantasía romántica",
        disponible: true
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

//•┈┈┈••✦ EJERCICIO 2 ✦••┈┈┈•//

/*
2. Funciones de Gestión de Libros
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
*/

//a- Agregar un nuevo libro al array libros. Se utiliza el método push, que agrega un elemento al final del array.
function agregarLibro(id, titulo, autor, anio, genero) {
    // Se crea un objeto con los datos del nuevo libro 
    let nuevoLibro = {
        id: id,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero,
        disponible: true
    }
    // Se agrega el objeto libro al array libros
    libros.push(nuevoLibro);
};

//*****Probando*****//
/*agregarLibro(11, "El Cid", "Anónimo", 1200, "Épica");
agregarLibro(12, "La isla del tesoro", "Robert Louis Stevenson", 1883, "Aventura");
// Mostrar el contenido del array para comprobar
console.log(libros);*/

//b- Buscar libros por título, autor o género. Se hace una búsqueda lineal, es decir, se recorre la lista de libros elemento por elemento (en orden), hasta encontrar lo que busca o hasta llegar al final. Se genera un nuevo array con los resultados de la búsqueda.

function buscarLibro(criterio, valor) {
    // Array donde se guardan los resultados de la búsqueda
    let resultados = [];
    // Recorremos el array de libros uno por uno
    for (let i=0; i<libros.length; i++) {
        // Comparamos el valor del criterio indicado con el valor buscado
        if (libros[i][criterio] === valor) {
            // Si hay coincidencia, se agrega el libro al array de resultados
            resultados.push(libros[i]);
        }
    }
    // Se devuelve el array con los libros encontrados
    return resultados;
}

//*****Probando*****//
/*//Búsqueda por autor
console.log(buscarLibro("autor", "J. R. R. Tolkien"));
//Búsqueda por género
console.log(buscarLibro("genero", "Fantasía"));*/

//c- Ordenar los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort), luego se muestra los libros ordenados en la consola. El método de burbuja compara los elementos de a pares y los intercambia si están en el orden incorrecto, repitiendo el proceso hasta que la lista queda ordenada.

function ordenarLibros(criterio) {
    let n = libros.length;
    // Bucle externo que controla cuántas veces recorremos la lista completa de libros.
    for (let i = 0; i < n - 1; i++) {
        // Bucle interno que compara de a pares. A medida que pasan las vueltas, los mayores se acomodan al final.
        for (let j = 0; j < n - i - 1; j++) {
            // Si el valor del criterio del libro actual es mayor que el siguiente, están desordenados.
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                // Se utiliza una variable auxiliar para guardar temporalmente el libro actual y poder intercambiarlo.
                let aux = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = aux;
            }

        }
    }

    // Mostrar libros ya ordenados
    console.log("Libros ordenados por " + criterio + ":");
    console.log(libros);
}

//*****Probando*****//
//console.log("Antes de ordenar:");
//console.log(libros);
//ordenarLibros("titulo"); // ordena alfabéticamente
//ordenarLibros("anio"); // ordena por año

//d- Elimina un libro del array libros según el id recibido

function borrarLibro(id) {
    //Recorremos el array de libros uno por uno
    for (let i = 0; i < libros.length; i++) {
        //Comparamos el id del libro actual con el id recibido por parámetro, si los ids coinciden, eliminamos ese libro del array
        if (libros[i].id === id) {
            // splice(i, 1) borra 1 elemento en la posición i
            libros.splice(i, 1);
            // Cortamos el bucle porque ya encontramos y borramos el libro
            break;
        }
    }
}

//*****Probando*****//
/*console.log("Antes de borrar:");
console.log(libros);
borrarLibro(3);
console.log("Después de borrar:");
console.log(libros);*/

//•┈┈┈••✦ EJERCICIO 3 ✦••┈┈┈•//

/*
3. Gestión de Usuarios
a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
*/

//a- La función crea un objeto usuario con los datos recibidos y lo agrega al array usuarios utilizando el método push.

function registrarUsuario(nombre, email) {
    // Se crea un objeto con los datos del nuevo usuario
    let nuevoUsuario = {
        id: usuarios.length + 1, // genera un id nuevo
        nombre: nombre,
        email: email,
        librosPrestados: []
    }
    // Se agrega el usuario al array usuarios
    usuarios.push(nuevoUsuario);
};

//*****Probando*****//
/*console.log("Usuarios antes:");
console.log(usuarios);
registrarUsuario("Ailin Aguilar", "ailinca@gmail.com");
console.log("Usuarios después:");
console.log(usuarios);*/

//b- La función no recibe parámetros, ya que no necesita información adicional para ejecutarse. Retorna el array "usuarios" con todos los usuarios registrados.

function mostrarTodosLosUsuarios() {
    // Devuelve el array completo de usuarios
    return usuarios;
};

//*****Probando*****//
/*console.log(mostrarTodosLosUsuarios());*/

//c- Función que busca un usuario en el array de usuarios según su email y devuelve su información. Si no existe, retorna null.

function buscarUsuario(email) {
    // Recorremos el array de usuarios uno por uno con un for
    for (let i=0; i<usuarios.length; i++) {
        // Comparamos el email del usuario actual con el email recibido
        if (usuarios[i].email === email) {
            // Si coincide, devolvemos ese usuario
            return usuarios[i];
        }
    }
    // Si no se encuentra ningún usuario, devolvemos null
    return null;
};

//*****Probando*****//
/*console.log("Búsqueda del primer usuario: ");
console.log(buscarUsuario("lucia.hitz@gmail.com"));
console.log("Búsqueda del segundo usuario: ");
console.log(buscarUsuario("null@hotmail.com"));*/

//d- Elimina un usuario del array usuarios según nombre y email

function borrarUsuario(nombre, email) {
    // findIndex recorre el array usuarios y devuelve la posición (índice) del primer usuario que cumpla la condición. Si no encuentra ninguno, devuelve -1.
    let indice = usuarios.findIndex(function(usuario) {
        // En cada vuelta comparamos el nombre y el email del usuario actual con los valores recibidos por parámetro
        return usuario.nombre === nombre && usuario.email === email;
    });

    // Verificamos si el usuario fue encontrado. Si se encuentra el usuario, findIndex es distinto a -1.
    if (indice !== -1) {
        // Eliminamos el usuario del array usando splice, elimina 1 elemento del array comenzando desde la posición indicada.
        usuarios.splice(indice, 1);
    }
};

//*****Probando*****//
/*console.log("Usuarios antes:")
console.log(usuarios);
borrarUsuario("Lucía Hitz", "lucia.hitz@gmail.com");
console.log("Usuarios después:");
console.log(usuarios);*/

//•┈┈┈••✦ EJERCICIO 4 ✦••┈┈┈•//

/*
4. Sistema de Préstamos
a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
*/

//a- La función se encarga de gestionar el préstamo de un libro. Primero busca el libro y el usuario correspondiente dentro de sus respectivos arrays. Luego verifica que el libro exista, que esté disponible y que el usuario también exista. Si se cumplen estas condiciones, marca el libro como no disponible y agrega su id al array de libros prestados del usuario.

function prestarLibro(idLibro, idUsuario) {

    // Buscamos el libro por su id usando find. El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
    let libro = libros.find(function(l) {
        //Compara el id del libro actual (l.id) con el idLibro recibido por parámetro. Si son iguales, devuelve true. Cuando find recibe true, deja de buscar y devuelve ese objeto libro.
        return l.id === idLibro;
    });

    // Buscamos el usuario en el array usuarios por su id
    let usuario = usuarios.find(function(u) {
        //Compara el id del usuario actual (u.id) con el idUsuario recibido por parámetro. Si son iguales, devuelve true. Cuando find recibe true, deja de buscar y devuelve ese objeto usuario.
        return u.id === idUsuario;
    });

    // Verificamos que el usuario exista, el libro exista y esté disponible
    if (libro && libro.disponible && usuario) {
        // Agregamos el id del libro al array de libros prestados del usuario
        usuario.librosPrestados.push(idLibro);
        // Cambiamos el estado del libro a no disponible
        libro.disponible = false;
    }
   
}

//*****Probando*****//
/*prestarLibro(2, 1);
console.log(usuarios);
console.log(libros);*/

//b- La función se encarga de registrar la devolución de un libro por parte de un usuario. Busca el libro y el usuario por sus IDs y, si ambos existen y el libro estaba prestado (no disponible), marca el libro como disponible nuevamente y elimina ese libro del listado de libros prestados del usuario.

function devolverLibro(idLibro, idUsuario) {

     // Buscamos el libro por su id en el array libros
    let libro = libros.find(function(l) {
        return l.id === idLibro;
    });

    // Buscamos el usuario por su id en el array usuarios
    let usuario = usuarios.find(function(u) {
        return u.id === idUsuario;
    });

    // Verificamos que el libro exista, que el usuario exista y que el libro NO esté disponible
    if (libro && usuario && libro.disponible === false) {

        // Cambiamos el estado del libro a disponible
        libro.disponible = true;

        // Buscamos la posición del id del libro dentro del array librosPrestados del usuario. indexOf() devuelve la posición (índice) donde se encuentra, y si no lo encientra devuelve -1.
        let indiceLibro = usuario.librosPrestados.indexOf(idLibro);
        //indiceLibro guarda la posición del id si el libro estaba prestado, sino guarda -1.

        // Si el libro está en la lista de prestados, lo eliminamos.
        if (indiceLibro !== -1) {
            // El método splice() borra por posición.
            usuario.librosPrestados.splice(indiceLibro, 1);
        }
    }
};

//*****Probando*****//
/*console.log("***ANTES***")
console.log(libros);
console.log(usuarios);
devolverLibro(3, 1);
console.log("***DESPUES***")
console.log(libros);
console.log(usuarios);*/

//•┈┈┈••✦ EJERCICIO 5 ✦••┈┈┈•//

/*
5. Reportes
a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
✔ Cantidad total de libros.
✔ Cantidad de libros prestados.
✔ Cantidad de libros por género.
✔ Libro más antiguo y más nuevo
*/

function generarReporteLibros() {

    // Para la cantidad total de libros se usa la propiedad length del array libros, length devuelve cuántos elementos hay en el array.
    let totalLibros = libros.length;
    // Mostramos por consola la cantidad total de libros.
    console.log("Cantidad total de libros:", totalLibros);

    //Para la cantidad de libros prestados filtramos el array libros para quedarnos solo con los que NO están disponibles.
    let librosPrestados = libros
    // filter() recorre todos los libros y devuelve un nuevo array con los que cumplen la condición
    .filter(function(libro) {
        // Si disponible es false, significa que el libro está prestado
        return libro.disponible === false;
    })
    // length devuelve la cantidad de elementos del array resultante
    .length;
    // Mostramos por consola la cantidad total de libros prestados.
    console.log("Cantidad total de libros prestados:", librosPrestados);

    //Se utiliza reduce() para recorrer el array de libros y generar un objeto 
    // que cuenta cuántos libros hay por cada género.
    let librosPorGenero = libros.reduce(function(acum, libro) {
        // Normalizamos el género (minúsculas y sin tildes)
        let genero = normalizarTexto(libro.genero);
        // Si el género no existe todavía, lo creamos y le asignamos el valor 1
        if (!acum[genero]) {
            acum[genero] = 1;
        } else {
            // Si el género ya existe, incrementamos el contador en 1
            acum[genero]++;
        }
        // Devolvemos el acumulador actualizado para la siguiente iteración
        return acum;
    }, {}); // El acumulador comienza como un objeto vacío
    // Mostramos el resultado por consola
    console.log("Cantidad de libros por género:");
    console.log(librosPorGenero);

    // Usamos reduce para recorrer el array de libros y devolver el más nuevo y el más antiguo
    // acum: es el acumulador, donde vamos guardando resultados parciales
    // libro: es el libro actual que se está recorriendo en esa vuelta
    let libroAntiguoNuevo = libros.reduce(function(acum, libro) {
        // Si todavía no existe un libro más antiguo en el acumulador
        // O si el año del libro actual es menor al que estaba guardado
        if (!acum.masAntiguo || libro.anio < acum.masAntiguo.anio) {
            // Guardamos el libro actual como el más antiguo
            acum.masAntiguo = libro;
        }
        // Si todavía no existe un libro más nuevo en el acumulador
        // O si el año del libro actual es mayor al que estaba guardado
        if (!acum.masNuevo || libro.anio > acum.masNuevo.anio) {
            // Guardamos el libro actual como el más nuevo
            acum.masNuevo = libro;
        }
        // Devolvemos el acumulador actualizado para la siguiente iteración
        return acum;
    }, {}); //{} valor inicial del acumulador (objeto vacío)
    // Mostramos los resultados por consola
    console.log("Libro más antiguo:", libroAntiguoNuevo.masAntiguo);
    console.log("Libro más nuevo:", libroAntiguoNuevo.masNuevo);

};

//*****Probando*****//
/*generarReporteLibros(libros);*/

//•┈┈┈••✦ EJERCICIO 6 ✦••┈┈┈•//

/*
6. Identificación Avanzada de libros
a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
*/

function librosConPalabrasEnTitulo() {

    let titulos = libros
        // Usamos filter para recorrer el array de libros
        //  y quedarnos solo con los que cumplen la condición
        .filter(function(libro) {
            // Separamos el título del libro en palabras usando split
            // Se genera un array donde cada palabra del título es un elemento
            let palabras = libro.titulo.split(" ");
            // Debe tener más de una palabra sino se descarta el título
            if (palabras.length <= 1) {
                return false;
            }
            // Verificamos que ninguna palabra sea un número
            for (let i=0; i<palabras.length; i++) {
                if (!isNaN(palabras[i])) {
                    return false; // descartamos este libro
                }
            }
            // Si tiene más de una palabra y ninguna de ellas es un número
            // el libro cumple la consigna
            return true;
        })

        // Para quedarnos solo con los títulos de los libros, y no con los objetos completos uso map.
        // Recorre el array, recibe el objeto libro y devuelve solo libro.titulo
        .map(function(libro) {
            return libro.titulo;
        });

    // Mostramos por consola el array de títulos obtenidos
    console.log("Libros con más de una palabra en el título (sin números):");
    console.log(titulos);

    // Devolvemos el array de títulos
    return titulos;

};

//*****Probando*****//
/*librosConPalabrasEnTitulo(libros);*/

//•┈┈┈••✦ EJERCICIO 7 ✦••┈┈┈•//

/*
7. Cálculos Estadísticos
a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
✔ Promedio de años de publicación de los libros.
✔ Año de publicación más frecuente.
✔ Diferencia en años entre el libro más antiguo y el más nuevo.
*/

function calcularEstadisticas() {

    // Promedio de años de publicación de los libros.

    // Año de publicación más frecuente.
    
    // Diferencia en años entre el libro más antiguo y el más nuevo.

};

//•┈┈┈••✦ EJERCICIO 8 ✦••┈┈┈•//

/*
8. Manejo de Cadenas
a) Crear una función normalizarDatos() que utilice métodos de strings para:
✔ Convertir todos los títulos a mayúsculas.
✔ Eliminar espacios en blanco al inicio y final de los nombres de autores.
✔ Formatear los emails de los usuarios a minúsculas.
*/

//•┈┈┈••✦ EJERCICIO 9 ✦••┈┈┈•//

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

//*****Funciones Auxiliares*****//

// Función que normaliza un texto:
// Primero lo pasa a minúsculas
// Después elimina las tildes
function normalizarTexto(texto) {
    return texto
        // Método que convierte todo a minúsculas.
        .toLowerCase()                 
        // Método que normaliza caracteres Unicode. NFD = Normalization Form Decomposition, separa la letra base de la tilde.
        .normalize("NFD")              
        // La parte antes de la coma es qué busco y la de después es con qué reemplazo. 
        // [\u0300-\u036f] es una expresión que representa un rango de caracteres diacríticos (tildes, diéresis,etc.). /g flag global para indicar que se reemplacen todas las apariciones.
        //"" es una cadena vacía, es el equivalente a borrar.
        .replace(/[\u0300-\u036f]/g, "") 
        // Reemplaza espacios por _
        .replace(/\s+/g, "_");     
}

