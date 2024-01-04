/*1. Convierta la siguiente función nombrada en una función de flecha:
function printMessage( mensaje ) {
console.log( mensaje )
 } */

const funcionFlecha = (mensaje) => {
    console.log(mensaje)
}
/*2. Convierta la siguiente función nombrada en una función de flecha:
function createMultplication (number1, number2) {
resultado sea = número1 * número2
Resultado devuelto
             }*/
const funccionFlechMultiplicar = (number1, number2) => number1 * number2 // cuando es sola una linea se le puede sacar el return y las llaves

/*3. A partir de una matriz: const array = [ 1,2,3,4,5,6,7,8,9 ], 
aplique un mapa a esa matriz y pase como argumento la función nombrada 
shown en el ejercicio anterior. Mostrar por consola el nuevo array obtenido. */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const recorridoArray = array.map(funccionFlechMultiplicar)
console.log(recorridoArray)

/* 4. Genere una función que reciba una matriz de cervezas como parámetro y devuelva una nueva matriz con 
las 10 cervezas con más alcohol.*/

console.log(beers);
function RecibirMatrisCerverza(arrayBeers, propiedad, boolean) {
    const ordenarlos = arrayBeers
        .filter((cerveza) => cerveza[propiedad])
        .toSorted((propiedadOne, propiedadTwo) => {
            if (propiedadOne[propiedad] < propiedadTwo[propiedad]) {
                return -1
            }
            if (propiedadOne[propiedad] > propiedadTwo[propiedad]) {
                return 1
            }
            return 0
        });
    if (boolean) {
        return ordenarlos.slice(0, 10)
    }
    return ordenarlos.reverse().slice(0, 10)
}
console.log(RecibirMatrisCerverza(beers, "abv", true))

/*5. Genere una función que reciba una matriz de cervezas como parámetro y devuelva una 
nueva matriz con las 10 cervezas menos amargas.*/

function menosAmarga(arrayCerveza, propiedad, boolean) {
    const $orden = arrayCerveza
        .filter((cerveza) => cerveza[propiedad])
        .toSorted((propieOne, propietwO) => {
            if (propiedad[propiedad] < propietwO[propiedad]) {
                return -1;
            }
            if (propiedad[propiedad] > propietwO[propiedad]) {
                return 1;
            }
            return 0;
        });
    if (boolean) {
        return $orden.slice(0, 10);
    }
    return $orden.reverse().slice(0, 10);
}
console.log(RecibirMatrisCerverza(beers, "ibu", true));

/*6. Genere una función que reciba como parámetros una matriz de cervezas y un nombre de una cerveza. 
a función debe devolver el objeto completo que coincida con el nombre introducido. */

function buscarNombreCerveza(matrizCervezas, nombreCerveza) {
    return matrizCervezas.find((cerveza) => cerveza.name === nombreCerveza);
}
console.log(buscarNombreCerveza(beers, "Rabiator"))

/*7. Genere una función que reciba como parámetro un array de cervezas,
 un valor y que devuelva el primer objeto cuya propiedad ibu sea igual al valor introducido, 
 en caso de que no haya cerveza con ese ibu que despliega un mensaje en la consola que diga 
 "No hay cerveza con un ibu de (valor introducido)". */

function buscarIbu(arrayCervezas, valorIbu) {
    const cervezaEncontrada = arrayCervezas.find(cerveza => cerveza.ibu == valorIbu)
    if (cervezaEncontrada) {
        return cervezaEncontrada
    } else {
        return console.log(`No hay cerveza con un ibu de ${valorIbu}`)
    }
}
console.log(buscarIbu(beers, 50))

/*8. Genere una función que reciba el nombre de una cerveza como parámetro y devuelva la posición en la 
matriz de esa cerveza. Si no se encuentra la cerveza, se debe imprimir un mensaje a través de la consola 
que diga "(El nombre de la cerveza ingresada) no existe". */

function encontrarCerveza(nombreCerveza) {
    const inicio = beers.findIndex(cerveza => cerveza.name == nombreCerveza)
    if (inicio) {
        return console.log(`La cerveza ${nombreCerveza} se encuentra en la posición ${inicio} de la matriz.`)
    } else {
        return console.log(`La cerveza ${nombreCerveza} no existe en la matriz.`)
    }
}
 encontrarCerveza('Movember')


/*9. Genere una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe 
devolver una nueva matriz con las cervezas que no superen el nivel de alcohol. Cada elemento de la nueva 
matriz debe ser un objeto que tenga las propiedades name, alcohol (abv) y "amargor" (ibu)*/

function NivelDeCervezasPorAlcohol(cervezas, nivelAlcohol) {
    return cervezas.filter(cerveza => cerveza.abv <= nivelAlcohol)
}
console.log(NivelDeCervezasPorAlcohol(beers, 5))


/*10. Genere una función que reciba como parámetros un array de cervezas, un nombre de propiedad y un valor 
booleano. Debería devolver un nuevo array con 10 cervezas ordenadas por la propiedad introducida como segundo 
argumento, ascendente si el tercero es verdadero o descendente si es falso.
 */
function listaDeCerveza(listaCerveza, nombrepropiedad, boolean) {
    const nuevoArray = listaCerveza.filter(cerveza => cerveza[nombrepropiedad]).toSorted((a, b) => {
        if (a[nombrepropiedad] < b[nombrepropiedad]) {
            return -1
        }
        if (a[nombrepropiedad] > b[nombrepropiedad]) {
            return 1
        }
        return 0
    })
    if (boolean) {
        return nuevoArray.slice(0, 10)
    }
    return nuevoArray.reverse().slice(0, 10)
}
console.log(listaDeCerveza(beers, "abv", true))

/*11. Genere una función que reciba como parámetro un array de cervezas y un id de un elemento HTML donde se 
imprimirá la tabla. La función debe representar (render, dibujar, pintar, rellenar, etc.) en un archivo html 
una tabla que contenga las columnas "Nombre", */

 
const $tbody = document.getElementById("tbody")

function CrearElementos(cerveza) {
    const tr = document.createElement("tr")
    const tdName = document.createElement("td")
    const tdAbv = document.createElement("td")
    const tdIbu = document.createElement("td")
    tdName.textContent = cerveza.name
    tdAbv.textContent = cerveza.abv
    tdIbu.textContent = cerveza.ibu
    tr.append(tdName, tdIbu, tdAbv)
    return tr
}

function completarLista(listaCerveza, elemento) {
    let fragment = document.createDocumentFragment()

    listaCerveza.forEach(cerveza => {
        const tr = CrearElementos(cerveza) 
        fragment.appendChild(tr)
    })

    elemento.appendChild(fragment)
}
 completarLista(beers, $tbody)
 
  



