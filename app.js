const libreriaMensajes = require('./libreria');

console.log("Ejemplo #3: Depurando desde nodejs.");
libreriaMensajes.saludo;
let texto = "Calculando el cuadrado de un número.";
console.log(texto);

debugger;
var x = 2;
let cuadrado = (x) =>{
    debugger;
    return x*x;
};
//
texto = "El número es: ";
console.log("%s %d",texto, x);
console.log("El cuadrado es: %d.", cuadrado(x));
libreriaMensajes.despedida();