//Práctica 1: Tipos de datos.
//Crea tres (3) variables para asignar el nombre, apellido y edad del personaje principal de una película o serie que te guste.

let name = 'Iktán';
let lastName = 'Rodríguez';
let age = 11;

/*Imprime en pantalla el nombre y el tipo de cada variable anterior de tal forma que en cada línea de la pantalla se vea algo como:
    Nombre: Harry, tipo: string
    Apellido: Potter, tipo: string
    Ocupación: 42, tipo: number
*/

console.log(`Nombre: ${name}, tipo: ${typeof(name)}`);
console.log(`Apellido: ${lastName}, tipo: ${typeof(lastName)}`);
console.log(`Edad: ${age} años, tipo: ${typeof(age)}`);

/*Crea una variable llamada city y asigna 5 lugares que aparezcan en la película o seríe. Después de cada asignación imprime el contenido de la 
variable*/

let city = 'Londres';
city = 'Argentina';
city = 'Finlandia';
city = 'Dinamarca';
city = 'México';

console.log(city);

/*Completa las predicciones! hay un listado con tipos de datos, primero escribe en la predicción qué dato crees que es y luego ejecuta el comando 
para verificar si tu respuesta es correcta*/

console.log(typeof(20)); //Predicción: number
console.log(typeof(true)); // Predicción: boolean
console.log(typeof('1' + '3')); // Predicción: string
console.log(typeof('Hamburgers' - 's')); //Predicción: NaN
console.log(typeof(95.5)); //Predicción: number
console.log(typeof(1 != 2)); //Predicción: boolean
'johnny' + 5; //Predicción: NaN
console.log(typeof(NaN)); //Predicción: NaN
console.log(typeof('1' - '3')); //Predicción: number
console.log(typeof('johnny' - 5)); //Predicción: NaN
console.log(typeof('hello')); //Predicción: string
console.log(typeof('hamburger' + 's')); //Predicción: string
console.log(typeof(99 * 'luftbaloons')); //Predicción: NaN

//Convierte a mayusculas la frase ‘al que madruga Dios lo ayuda’

let phrase = 'al que madruga Dios lo ayuda';
let upperCasePhrase = phrase.toUpperCase();
console.log(upperCasePhrase);

//Convierte a minusculas la frase “MAS VALE PAJARO EN MANO QUE CIENTOS VOLANDO”.

let phrase2 = 'MAS VALE PAJARO EN MANO QUE CIENTOS VOLANDO';
let lowerCasePhrase2 = phrase2.toLowerCase();
console.log(lowerCasePhrase2);

/*Se tiene las variables 
a.const saludo = ‘HoLa’;
b.const saludo2 = ‘mUnDo’;
Concatena las variables y realiza las transformaciones necesarias para Imprimir en pantalla ‘hola MUNDO' */

const saludo = 'HoLa';
const saludo2 = 'mUnDo';

const lowerCaseSaludo = saludo.toLowerCase();
const upperCaseSaludo2 = saludo2.toUpperCase();
console.log(`${lowerCaseSaludo} ${upperCaseSaludo2}`)

/* La cajera de un supermercado necesita implementar un algoritmo que le imprima en pantalla el precio con descuento de un producto. Si el precio 
del producto es 100 y el porcentaje de descuento es 20%, el precio del producto con descuento es 80. El programa debe imprimir en pantalla: Su 
producto tiene un precio de 80, el descuento fue del 20% */

let productPrice = parseInt(prompt('Ingrese el precio del producto: '));
let discountProduct = parseInt(prompt('Ingrese el porcentaje de descuento del producto: '));

function productFinalPrice (productPrice, discountProduct){
    let amountDescountprice = (productPrice * discountProduct) / 100;
    let finalPrice = productPrice - amountDescountprice;
    return finalPrice;
}
let finalPriceResult = productFinalPrice(productPrice, discountProduct);
alert(`El precio de su producto con descuento es: ${finalPriceResult}`);

//Obtener el valor de un promedio de cinco números. Una vez obtenido el valor, imprimir el resultado en pantalla.

let sum = 0;
const generatedNumbers = 5;

for(let i = 0; i < generatedNumbers; i++){
    let randomNumbers = Math.floor(Math.random() * 100) + 1;
    sum += randomNumbers;
}
let prom = sum/generatedNumbers;
console.log(prom);

/*Crear una variable con el valor del diámetro de un círculo. Apartir de ese valor, calcular su perímetro. Por último, imprimir en pantalla el 
resultado.*/

const diametro = 10;
let pi = 3.14;
let perimetro = 2 * pi * (diametro/2)

console.log(perimetro)






