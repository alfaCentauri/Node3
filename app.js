console.log("Ejemplo #3: Depurando desde nodejs.");
let texto = "Ejemplo";
console.log(texto);
texto = texto + " #3: ";

debugger;
var x = 2;
let cuadrado = (x) =>{
    debugger;
    return x*x;
};
//
console.log("El cuadrado es: %d.", cuadrado(3));