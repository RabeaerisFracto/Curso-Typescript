var mensaje = "hola Mundo";
var numero = 42;
var booleano = true;
var arrayString = ["parte de objeto 1", "parte 2", "parte 3"];
var arrayNumero = [1, 2, 3, 4, 5];
var arrayVacio = [];
var numero2 = []; //metodo TS de Arreglo/Array.
arrayNumero.map(function (x) { return x.toLocaleString; });
//TS, al reconocer objeto y tipo, automaticamente solo sugiere los metodos disponibles al tipo.
console.log(mensaje);
var tupla = [1, ["stringX", "stringY"], 2];
//tuplas permiten guardar datos siempre y cuando esten definidos en el tipo.
//atento con metodos de cadena como push que modifica el orden de la cadena. TS no corrige estos.
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
//enum funciona con PascalCase(convencionalmente). Cada palabra parte con mayus, incluso primera.
//si no se asigna valor, parte de 0 con 1er elemento.
//Si se asigna valor numerico distinto, los sgts son consecutivos.
//Si se asigna String, hay que asignarle el valor manualmente al resto del enum.
var queTalla = Talla.Mediana;
console.log(queTalla);
