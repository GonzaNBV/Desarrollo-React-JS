// --Gonzalo Nicolas Vidal--
//Ejercicios de JavaScript
//JavaScript 3 (50 ejercicios):

// 1) Dado un array de números, escribir una función que calcule la suma de todos los números del array.
function sumaArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
// 2) Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.
function concatenarStrings(arr) {
    return arr.join('');
  }
  
// 3) Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.
  function mayoresA10(arr) {
    return arr.filter(num => num > 10);
  }
  
// 4) Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.
  function sumaPares(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
  }
  
// 5) Mediante el uso del método indexOf y splice, desarrollar una función que reciba un array de strings y un stringEliminar, la misma función nos devolverá un array sin el elemento que se eliminó. En caso de no tener el elemento a eliminar se deberá retornar null.
  function eliminarElemento(arr, stringEliminar) {
    const index = arr.indexOf(stringEliminar);
    if (index !== -1) {
      arr.splice(index, 1);
      return arr;
    }
    return null;
  }
  
// 6) Dado un array de nombres y un nombreDeLista, se deberá crear una función llamada crearLista que retorne un string con el siguiente formato.
  function crearLista(array, nombreDeLista) {
    return `Lista de ${nombreDeLista}:\n${array.join('\n')}`;
  }
  
// 7) Dado un array de strings y un stringBuscado, elaborar una función que retorne la cantidad de veces que apareció en el array el stringBuscado.
  function contarApariciones(arr, stringBuscado) {
    return arr.filter(str => str === stringBuscado).length;
  }
  
// 8) Crear un array vacio llamado gananciasMensuales. Crear una función llamada vender, que reciba una cantidadVendida, un precio y un nombreDeProducto. La misma deberá agregar el precio total al array de gananciasMensuales.
  let gananciasMensuales = [];
  function vender(cantidadVendida, precio, nombreDeProducto) {
    gananciasMensuales.push(cantidadVendida * precio);
  }
  
// 9) Crear un array vacio llamado gastosMensuales. Crear una función llamada comprar, que reciba una cantidadComprada, un precio y un nombreDeProducto. La misma deberá agregar el total al array de gastosMensuales.
  let gastosMensuales = [];
  function comprar(cantidadComprada, precio, nombreDeProducto) {
    gastosMensuales.push(cantidadComprada * precio);
  }
  
// 10) Dado el array gastosMensuales y gananciasMensuales, desarrollar una función que nos retorne la gananciasMensuales. La misma se deduce de la diferencia entre la suma de valores del array de gastosMensuales y el de gananciasMensuales. (se puede usar la función hecha en el punto 1).
  function calcularGanancias() {
    const totalGanancias = sumaArray(gananciasMensuales);
    const totalGastos = sumaArray(gastosMensuales);
    return totalGanancias - totalGastos;
  }
  
// ---------------------------------------------------------------------------------
// FUNCIONES FLECHA Y MÉTODOS BÁSICOS

  
// 11) Definí una función calcularAreaTriangulo que tome por parámetros la base y la altura de un triángulo y devuelva el área del mismo.
  const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;
  
// 12) Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la palabra termina con el caracter.
  const esElUltimoCaracter = (palabra, caracter) => palabra.endsWith(caracter);
  
// 13) Definí una función esValida que tome por parámetro una contrasenia (string) y nos indique si tiene 8 caracteres o más.
  const esValida = (contrasenia) => contrasenia.length >= 8;
  
// 14) Definí una función contarPalabras que reciba como argumento un string str y devuelva la cantidad de palabras que posee.
  const contarPalabras = (str) => str.split(' ').length;
  
// 15) Definí una función capitalizar que reciba como argumento un string str y devuelva el mismo string con la primera letra en mayúscula.
  const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
// 16) Definí una función obtenerPrimeraOracion que tome por parámetro un string str y devuelva la primera oración de dicho string.
  const obtenerPrimeraOracion = (str) => str.split('.')[0] + '.';
  
// 17) Definí una función ocultarContrasenia que reciba como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos.
  const ocultarContrasenia = (contrasenia) => '*'.repeat(contrasenia.length);
  
// 18) Definí una función obtenerExtension que tome por parámetro un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo.
  const obtenerExtension = (archivo) => archivo.split('.').pop();
  
// 19) Definí una función esPuenteSeguro que tome por parámetro un string que represente a un puente que consista en caracteres numerales y espacios y nos indique si el puente está entero y es seguro atravesar.
  const esPuenteSeguro = (puente) => !puente.includes(' ');
  

// ---------------------------------------------------------------------------------
// ARRAYS
  
// 20) Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos.
  const obtenerMenor = (arr) => Math.min(...arr);
  
// 21) Definí una función sumar que reciba como argumento un array de números numeros y devuelva la suma de ellos.
  const sumar = (arr) => arr.reduce((acc, num) => acc + num, 0);
  
// 22) Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.
  const contiene = (numero, arr) => arr.includes(numero);
  
// 23) Definí una función gano que reciba como argumento un array tragamonedas con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.
  const gano = (arr) => arr.slice(0, 5).every((symbol) => symbol === arr[0]);
  
// 24) Definí una función separar que tome por parámetro un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.
  const separar = (str) => {
    const perros = str.split('🐶').join('');
    const gatos = str.split('🐱').join('');
    return perros + gatos;
  };
  
// 25) Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado.
  const multiplicar = (multiplicador, arr) => arr.map(num => num * multiplicador);
  
// 26) Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.
const filtrarPorLongitudMayorA = (longitud, arr) => arr.filter(palabra => palabra.length > longitud);
  
// 27) Definí una función jugarPiedraPapelTijeras que reciba como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente.
const jugarPiedraPapelTijeras = (jugadoraA, jugadoraB, jugadasA, jugadasB) => {
    let puntosA = 0;
    let puntosB = 0;
    for (let i = 0; i < jugadasA.length; i++) {
      if (jugadasA[i] === jugadasB[i]) {
        continue;
      }
      if (
        (jugadasA[i] === 'piedra' && jugadasB[i] === 'tijera') ||
        (jugadasA[i] === 'papel' && jugadasB[i] === 'piedra') ||
        (jugadasA[i] === 'tijera' && jugadasB[i] === 'papel')
      ) {
        puntosA++;
      } else {
        puntosB++;
      }
    }
    if (puntosA > puntosB) return jugadoraA;
    if (puntosB > puntosA) return jugadoraB;
    return 'Empate';
  };
  
// ---------------------------------------------------------------------------------
// COMBINADOS
  
// 28) Definí una función esPalindromo que tome una palabra y devuelva si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda.
  const esPalindromo = (palabra) => palabra === palabra.split('').reverse().join('');
  
// 29) Definí una función repetirLetras que reciba como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.
  const repetirLetras = (palabra, cantidad) => palabra.split('').map(letra => letra.repeat(cantidad)).join('');
  
// 30) Definí una función removerDuplicados que tome por parámetros un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.
  const removerDuplicados = (arr) => [...new Set(arr)];
  
// ---------------------------------------------------------------------------------
  // METODOS AVANZADOS
  
// 31) Definí la función dobles que tome una lista de numeros y devuelva un nuevo array con cada valor multiplicado por dos
  const dobles = (arr) => arr.map(num => num * 2);
  
// 32) Definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.
  const longitudes = (arr) => arr.map(frase => frase.length);
  
// 33) Definí la función posiciones que tome una lista de canciones de una playlist y devuelva un nuevo array con los números de las posiciones de cada canción.
  const posiciones = (arr) => arr.map((cancion, index) => `${index} - ${cancion}`);
  
// 34) Definí la función losMasCaros que tome una lista de costos que representan costos de diferentes productos y devuelva un nuevo array con los precios más caros (mayores a 50)
  const losMasCaros = (arr) => arr.filter(costo => costo > 50);
  
// 35) Definí la función soloStrings que tome una lista de mix con varios elementos de distintos tipos de datos y devuelva un nuevo array que contenga sólo los datos de tipo string.
  const soloStrings = (arr) => arr.filter(item => typeof item === 'string');
  
// 36) Crear contador con botones.
  let contador = 0;
  document.querySelector('#decrementar').addEventListener('click', () => { contador -= 1; actualizarContador(); });
  document.querySelector('#incrementar').addEventListener('click', () => { contador += 1; actualizarContador(); });
  document.querySelector('#decrementar5').addEventListener('click', () => { contador -= 5; actualizarContador(); });
  document.querySelector('#incrementar5').addEventListener('click', () => { contador += 5; actualizarContador(); });
  document.querySelector('#decrementar10').addEventListener('click', () => { contador -= 10; actualizarContador(); });
  document.querySelector('#incrementar10').addEventListener('click', () => { contador += 10; actualizarContador(); });
  
  function actualizarContador() {
    document.querySelector('#contador').textContent = contador;
  }
  



//40) Función para obtener información de un disco
javascript
Copiar

  function infoDelDisco(disco) {
    return `El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`;
  }
  
  let disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
  };
  
  console.log(infoDelDisco(disco));

//41) Función para saber si las bandas están activas
function estanActivas(bandas) {
  return bandas.map(banda => {
    if (banda.activa) {
      return `${banda.nombre} está activa desde el año ${banda.fundacion}`;
    } else {
      return `${banda.nombre} no está activa`;
    }
  }).join("\n");
}

let bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 4, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 5, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

console.log(estanActivas(bandas));


  //42) Función para mostrar información de una banda
  function informacionDeLaBanda(banda) {
    const cantidadDeCanciones = banda.discos.reduce((acc, disco) => acc + disco.canciones.length, 0);
    const duracionPromedio = banda.discos.reduce((acc, disco) => acc + disco.duracion, 0) / cantidadDeCanciones;
  
    return `${banda.nombre} se fundó en el año ${banda.anio}. Tiene ${banda.integrantes.length} integrantes: ${banda.integrantes.join(", ")}. Tiene en total ${banda.discos.length} discos. Tiene en total ${cantidadDeCanciones} canciones entre todos los discos. En promedio, cada canción dura ${duracionPromedio.toFixed(2)} segundos.`;
  }
  
  let ledZeppelin = {
    nombre: "Led Zeppelin",
    anio: 1968,
    activa: false,
    miniatura: "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
    integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
    discos: [
      { nombre: "Led Zeppelin", anio: 1969, canciones: ["Good Times, Bad Times", "Communication Breakdown"], duracion: 2691 },
      { nombre: "Led Zeppelin II", anio: 1969, canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"], duracion: 2502 },
      { nombre: "Led Zeppelin III", anio: 1970, canciones: ["Immigrant Song"], duracion: 2489 },
      { nombre: "Led Zeppelin IV", anio: 1971, canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"], duracion: 2559 },
    ]
  };
  
  console.log(informacionDeLaBanda(ledZeppelin));

  //43) Función para mostrar propiedades y valores de un producto
  function obtenerPropiedadesYValores(producto) {
    let propiedades = "";
    for (let propiedad in producto) {
      propiedades += `producto['${propiedad}'] -> ${producto[propiedad]}\n`;
    }
    return propiedades;
  }
  
  let producto = {
    id: "ADA-020",
    titulo: "Gubergren sed est amet voluptua",
    precio: 123.75,
    imagen: "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
    condicion: "nuevo",
    envioGratis: true,
    ubicacion: "Capital Federal"
  };
  
  console.log(obtenerPropiedadesYValores(producto));
  
//44) Función para verificar si un perfil tiene email
function tieneEmail(perfil) {
  return perfil.email ? 'El usuario tiene la propiedad email' : 'El usuario no tiene la propiedad email';
}

let perfilConEmail = {
  nombreDeCuenta: "ellie_arroway",
  contrasenia: "vegaeterna",
  email: "ellie@argos.org"
};

console.log(tieneEmail(perfilConEmail));

//45) Validar contraseña
function validarPassword(perfil) {
  const contraseniasInseguras = ["123456", "password", "111111", "qwerty"];
  let mensaje = '';
  let verificada = true;

  if (perfil.password.length < 6) {
    mensaje = 'Contraseña con menos de 6 caracteres';
    verificada = false;
  } else if (contraseniasInseguras.includes(perfil.password)) {
    mensaje = 'Contraseña muy insegura';
    verificada = false;
  }

  return { verificada, mensaje };
}

let perfil3 = {
  nombre: 'Hedy',
  apellido: 'Lamarr',
  email: 'hlamarr@gmail.com',
  password: '1234'
};

console.log(validarPassword(perfil3)); 

//46) Crear HTML a partir de un objeto de disco
function render(disco) {
  return `
    <div class="card m-5" id="${disco.id}">
      <img class="card-img-top" src="${disco.portada}" alt="${disco.banda} - ${disco.nombre}" />
      <div class="card-body">
        <h5 class="card-title">${disco.banda}</h5>
        <p class="card-text">${disco.nombre} (${disco.anio}) | ${disco.genero}</p>
        <a href="${disco.info}" class="btn btn-primary">${disco.info}</a>
      </div>
    </div>
  `;
}

let albumDeEjemplo = {
  id: 'nirv1234',
  nombre: 'With The Lights Out',
  anio: 2004,
  genero: 'Grunge',
  banda: 'Nirvana',
  portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
  info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
};

console.log(render(albumDeEjemplo));

//47) Función para saber si se pueden comprar productos
function comprarProductos(dinero, productos) {
  let resultado = {};
  
  for (let producto in productos) {
    resultado[producto] = dinero >= productos[producto];
  }
  
  return resultado;
}

let productos = { cookies: 60, chocolate: 110, soda: 120 };
let dinero = 115;

console.log(comprarProductos(dinero, productos));

//48) Función para contar letras, digitos y espacios
function obtenerInfoString(str) {
  let letras = 0, digitos = 0, espacios = 0;

  for (let char of str) {
    if (/\d/.test(char)) {
      digitos++;
    } else if (/\s/.test(char)) {
      espacios++;
    } else {
      letras++;
    }
  }

  return { letras, digitos, espacios };
}

console.log(obtenerInfoString("H3ll0 Wor1d"));

//49) Función para verificar si una persona se ajusta a una búsqueda de empleo
function seAdecua(persona, busqueda) {
  const experienciaSuficiente = persona.experiencia >= busqueda.experiencia;
  const lenguajesAdecuados = busqueda.lenguajes.every(lenguaje => persona.lenguajes.includes(lenguaje));
  const locacionAdecuada = busqueda.locacion.includes(persona.locacion);
  const remuneracionAdecuada = persona.remuneracion <= busqueda.remuneracion;

  return experienciaSuficiente && lenguajesAdecuados && locacionAdecuada && remuneracionAdecuada;
}

let persona = {
  experiencia: 4,
  lenguajes: ["JavaScript", "HTML", "CSS"],
  locacion: "Buenos Aires",
  remuneracion: 35000
};

let busqueda = {
  experiencia: 1,
  lenguajes: ["JavaScript", "HTML"],
  locacion: ["Buenos Aires"],
  remuneracion: 40000
};

console.log(seAdecua(persona, busqueda));

