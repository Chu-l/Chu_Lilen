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
    },
    {
        id: 11,
        titulo: "Parque Jurásico",
        autor: "Michael Crichton ",
        anio: 1990,
        genero: "Ciencia ficción",
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
    },
    {
        id: 6,
        nombre: "Nidia Desio",
        email: "NIDIAd@Hotmail.com",
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
    // Normalizamos el valor ingresado por el usuario
    let valorNormalizado = normalizarTexto(valor);
    // Recorremos el array de libros uno por uno
    for (let i=0; i<libros.length; i++) {
        // Tomamos el valor del libro según el criterio (titulo, autor o genero)
        let datoLibro = libros[i][criterio];
        // Verificamos que el dato exista
        if (datoLibro) {
            // Normalizamos el dato del libro
            let datoNormalizado = normalizarTexto(datoLibro);
            // Comparamos texto normalizado con texto normalizado
            if (datoNormalizado === valorNormalizado) {
                // Si hay coincidencia, agregamos el libro al array de resultados
                resultados.push(libros[i]);
            }
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
    // Normalizamos el email recibido por parámetro
    let emailNormalizado = email.trim().toLowerCase();
    // Recorremos el array de usuarios uno por uno con un for
    for (let i=0; i<usuarios.length; i++) {
        // Normalizamos el email guardado por si está mal cargado
        let emailUsuario = usuarios[i].email.trim().toLowerCase();
        // Comparamos el email del usuario actual con el email recibido
        if (emailUsuario === emailNormalizado) {
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
    // Normalizamos los parámetros recibidos
    let nombreNormalizado = nombre.trim().toLowerCase();
    let emailNormalizado = email.trim().toLowerCase();
    // findIndex recorre el array usuarios y devuelve la posición (índice) del primer usuario que cumpla la condición. Si no encuentra ninguno, devuelve -1.
    let indice = usuarios.findIndex(function(usuario) {
        // Normalizamos los datos guardados del usuario
        let nombreUsuario = usuario.nombre.trim().toLowerCase();
        let emailUsuario = usuario.email.trim().toLowerCase();
        // En cada vuelta comparamos el nombre y el email del usuario actual con los valores recibidos por parámetro
        return nombreUsuario === nombreNormalizado && emailUsuario === emailNormalizado;
    });

    // Verificamos si el usuario fue encontrado. Si se encuentra el usuario, findIndex es distinto a -1.
    if (indice !== -1) {
        // Eliminamos el usuario del array usando splice, elimina 1 elemento del array comenzando desde la posición indicada.
        usuarios.splice(indice, 1);
        console.log("Usuario eliminado correctamente.");
    } else {
        console.log("Usuario no encontrado.");
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

    // ***Promedio de años de publicación de los libros***
    // Usamos reduce para sumar todos los años de publicación
    let sumaAnios = libros.reduce(function(acum, libro) {
        // En cada vuelta sumamos el año del libro actual
        return acum + libro.anio;
    }, 0); // 0 es el valor inicial del acumulador
    // Calculamos el promedio dividiendo la suma por la cantidad de libros 
    // y redondeamos el resultado usando Math.round() obteniendo un entero
    let promedio = Math.round(sumaAnios / libros.length);
    // Mostramos el promedio en consola
    console.log("Promedio de años de publicación: ", promedio);

    // ***Año de publicación más frecuente***
    // Creamos un objeto para contar repeticiones
    // Usamos reduce() para recorrer el array libros
    // acum es el acumulador, donde se irá armando un objeto con el conteo
    // libro es el libro actual en cada iteración.
    let contadorAnios = libros.reduce(function(acum, libro) {
        // Condicion para verificar si el año aún no existe como propiedad en el objeto acumulador
        // si no existe, se inicializa el conteo.
        if (!acum[libro.anio]) {
            // Si el año no existe, lo creamos en el objeto. 
            // Se le asigna el valor 1 porque es la primera vez que aparece ese año.
            acum[libro.anio] = 1;
        } else {
            // Si el año ya existía, incrementa el valor en 1 para sumar una nueva aparición.
            acum[libro.anio]++;
        }
        // Devolvemos el acumulador actualizado.
        return acum;
    }, {}); // {} es el valor inicial del acumulador.
    // Armamos un array solo con las cantidades (cuántas veces aparece cada año)
    // Object.values() convierte los valores del objeto contadorAnios
    // en un array con las cantidades de apariciones de cada año
    let cantidades = Object.values(contadorAnios);
    // Obtenemos la mayor frecuencia usando Math.max
    let maxFrecuencia = Math.max(...cantidades); //El ... saca los valores del array y los pasa como argumentos separados
    // Buscamos qué años tienen esa frecuencia máxima
    // Object.keys() obtiene todas las claves de un objeto.
    let aniosMasFrecuentes = Object
    // Object.keys(contadorAnios) devuelve un array con todos los años.
    .keys(contadorAnios)
    //filter() recorre el array de años uno por uno
    .filter(function(anio) {
        // contadorAnios[anio] nos dice cuántas veces aparece ese año
        // maxFrecuencia es la cantidad más alta encontrada
        // Si ese año aparece la misma cantidad que maxFrecuencia, filter() lo incluye en el array final.
        return contadorAnios[anio] === maxFrecuencia;
    })
    //Convierte cada elemento del array en un número.
    .map(Number);
    // Mostramos el o los años con mayor frecuencia en consola separados con comas
    console.log("Año(s) de publicación más frecuente(s):", aniosMasFrecuentes.join(", "));

    // ***Diferencia en años entre el libro más antiguo y el más nuevo***
    // Creamos un array solo con los años de publicación de los libros
    // map() recorre el array libros y devuelve un nuevo array con los años
    let anios = libros.map(function(libro) {
        return libro.anio;
    });
    // Obtenemos el año más antiguo (mínimo) usando Math.min
    // El operador ... (spread) pasa los valores del array como argumentos separados
    let anioMasAntiguo = Math.min(...anios);
    // Obtenemos el año más nuevo o el año máximo usando Math.max
    let anioMasNuevo = Math.max(...anios);
    // Calculamos la diferencia
    let diferencia = anioMasNuevo - anioMasAntiguo;
    // Mostramos la diferencia por consola
    console.log("Diferencia entre el libro más antiguo y el más nuevo:", diferencia);

};

//*****Probando*****//
/*calcularEstadisticas();*/

//•┈┈┈••✦ EJERCICIO 8 ✦••┈┈┈•//

/*
8. Manejo de Cadenas
a) Crear una función normalizarDatos() que utilice métodos de strings para:
✔ Convertir todos los títulos a mayúsculas.
✔ Eliminar espacios en blanco al inicio y final de los nombres de autores.
✔ Formatear los emails de los usuarios a minúsculas.
*/

function normalizarDatos() {

    // ***Convertir todos los títulos de los libros a mayúsculas***
    // Recorremos el array libros uno por uno
    // Se quiere modificar los objetos existentes por lo que usamos .forEach
    libros.forEach(function(libro) {
        // toUpperCase() convierte el texto a mayúsculas
        libro.titulo = libro.titulo.toUpperCase();
    });
    // ***Eliminar espacios en blanco al inicio y final del nombre del autor***
    libros.forEach(function(libro) {
        // trim() elimina espacios al inicio y al final del string
        libro.autor = libro.autor.trim();
    });
    // ***Pasar los emails de los usuarios a minúsculas***
    usuarios.forEach(function(usuario) {
        // toLowerCase() convierte el texto a minúsculas
        usuario.email = usuario.email.toLowerCase();
    });

};

//*****Probando*****//
/*console.log("ANTES:");
console.log(libros);
console.log(usuarios);
normalizarDatos();
console.log("DESPUÉS:");
console.log(libros);
console.log(usuarios);*/

//•┈┈┈••✦ EJERCICIO 9 ✦••┈┈┈•//

/*
9. Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
*/

// Función principal que muestra el menú y permite interactuar con el sistema
function menuPrincipal() {

    // Variable para controlar si el menú sigue activo, si vale 0 el programa termina
    let opcion;

    // Usamos un do while para que el menú se muestre al menos una vez
    // y se repita hasta que el usuario decida salir
    do {
        // Mostramos el menú por consola
        console.log("*****MENÚ PRINCIPAL*****");
        console.log("1. Agregar libro");
        console.log("2. Buscar libro");
        console.log("3. Ordenar libros");
        console.log("4. Borrar libro");
        console.log("5. Registrar usuario");
        console.log("6. Mostrar todos los usuarios");
        console.log("7. Buscar usuario");
        console.log("8. Borrar usuario");
        console.log("9. Prestar libro");
        console.log("10. Devolver libro");
        console.log("11. Generar reporte de libros");
        console.log("12. Libros con más de una palabra en el título");
        console.log("13. Calcular estadísticas");
        console.log("14. Normalizar datos");
        console.log("0. Salir");

        // Pedimos al usuario que ingrese una opción
        opcion = prompt("Ingrese una opción: ");

        // Convertimos la opción a número
        opcion = Number(opcion);

        // Usamos switch para manejar cada opción del menú
        switch (opcion) {

            case 1:
                // Se piden al usuario los datos necesarios para agregar un nuevo libro
                let id = Number(prompt("Ingrese ID del libro: "));
                let titulo = prompt("Ingrese título: ");
                let autor = prompt("Ingrese autor: ");
                let anio = Number(prompt("Ingrese año de publicación: "));
                let genero = prompt("Ingrese género: ");
                // Se llama a la función agregarLibro con los datos ingresados
                agregarLibro(id, titulo, autor, anio, genero);
                // El break corta la ejecución del switch una vez que se ejecuta el case correcto
                // y hace que el programa vuelva al menú principal
                break;

            case 2:
                // Se le pide al usuario el criterio por el cual quiere buscar
                // Puede ser: titulo, autor o genero
                let criterio = prompt("Buscar por (titulo/autor/genero): ");
                // Se le pide al usuario el valor a buscar según el criterio elegido
                let valor = prompt("Ingrese el valor a buscar: ");
                // Se llama a la función buscarLibro y se muestran los resultados por consola
                console.log(buscarLibro(criterio, valor));
                break;

            case 3:
                // Se le pide al usuario el criterio por el cual desea ordenar los libros
                let criterioOrden = prompt("Ordenar por (titulo/anio): ");
                // Se llama a la función ordenarLibros con el criterio ingresado
                ordenarLibros(criterioOrden);
                break;

            case 4:
                // Se le pide al usuario el ID del libro que desea eliminar
                let idEliminar = Number(prompt("Ingrese el ID del libro a borrar: "));
                // Se llama a la función borrarLibro pasando el ID ingresado
                // La función elimina el libro del array libros si el ID existe
                borrarLibro(idEliminar);
                break;

            case 5:
                // Se le pide al usuario el nombre del nuevo usuario y email
                let nombreUsuario = prompt("Ingrese nombre del usuario: ");
                let emailUsuario = prompt("Ingrese email: ");
                // Se llama a la función registrarUsuario para agregar el usuario al sistema
                registrarUsuario(nombreUsuario, emailUsuario);
                break;

            case 6:
                // Se llama a la función mostrarTodosLosUsuarios
                // La función devuelve el array completo de usuarios registrados
                console.log(mostrarTodosLosUsuarios());
                break;

            case 7:
                // Se le pide al usuario el email del usuario que desea buscar
                let emailBuscar = prompt("Ingrese email del usuario: ");
                console.log(buscarUsuario(emailBuscar));
                break;

            case 8:
                // Se le pide al usuario el nombre y email del usuario que desea eliminar
                let nombreBorrar = prompt("Ingrese nombre del usuario: ");
                let emailBorrar = prompt("Ingrese email del usuario: ");
                // Se llama a la función borrarUsuario pasando el nombre y el email
                // La función se encarga de buscar y eliminar el usuario correspondiente
                borrarUsuario(nombreBorrar, emailBorrar);
                break;

            case 9:
                // Se pide al usuario el ID del libro que se desea prestar
                let idLibroPrestar = Number(prompt("Ingrese ID del libro: "));
                // Se pide al usuario el ID del usuario que va a recibir el libro
                let idUsuarioPrestar = Number(prompt("Ingrese ID del usuario: "));
                // Se llama a la función prestarLibro, pasándole el ID del libro y del usuario
                 // La función se encarga de marcar el libro como no disponible
                 // y de agregarlo a la lista de libros prestados del usuario
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
                break;

            case 10:
                // Se pide al usuario el ID del libro que se quiere devolver
                let idLibroDevolver = Number(prompt("Ingrese ID del libro: "));
                // Se pide al usuario el ID del usuario que devuelve el libro
                let idUsuarioDevolver = Number(prompt("Ingrese ID del usuario: "));
                // Se llama a la función devolverLibro con los IDs correspondientes
                // La función se encarga de marcar el libro como disponible nuevamente
                // y eliminarlo del array de libros prestados del usuario
                devolverLibro(idLibroDevolver, idUsuarioDevolver);
                break;

            case 11:
                // Llama a la función que genera distintos reportes sobre los libros
                // (cantidad total, libros prestados, libros por género, etc.)
                generarReporteLibros();
                break;

            case 12:
                // Llama a la función que devuelve un array con los títulos
                // de los libros que tienen más de una palabra en el título
                librosConPalabrasEnTitulo();
                break;

            case 13:
                // Llama a la función que calcula estadísticas sobre los libros
                // (promedio de años, año más frecuente, diferencia entre el más antiguo y el más nuevo)
                calcularEstadisticas();
                break;

            case 14:
                // Llama a la función que normaliza los datos del sistema
                normalizarDatos();
                break;

            case 0:
                // Esta opción permite salir del sistema
                console.log("Saliendo del sistema...");
                break;

            default:
                // Este bloque se ejecuta cuando el usuario ingresa
                // un número que no coincide con ningún case válido
                console.log("Opción inválida. Intente nuevamente.");
        }

    } while (opcion !== 0); // El menú se repite hasta que el usuario elija salir
}

// Llamamos a la función principal para iniciar el programa
menuPrincipal();

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
        // Elimina espacios en blanco al inicio y al final 
        .trim()
        // Reemplaza espacios por _
        .replace(/\s+/g, "_");     
}

