"use strict";
let mensaje = "hola Mundo";
let numero = 42;
let booleano = true;
let arrayString = [`parte de objeto 1`, `parte 2`, `parte 3`];
let arrayNumero = [[1, 2], [2, 6], [3, 6], [4, 6], [`5,6`]];
let arrayVacio = [];
let numero2 = [];
arrayNumero.map(x => x.toLocaleString);
console.log(mensaje);
let tupla = [1, [`stringX`, `stringY`], 2];
const queTalla = "m";
console.log(queTalla);
const state = 2;
const objeto = {
    id: 1,
    nombre: ``,
    talla: "l",
    direccion: {
        numero: 1,
        calle: `Alameda`,
        presente: false
    }
};
const arregloArrayX = [];
function sumaleDos(num) {
    return num + 2;
}
const sumaleTres = (num) => {
    if (num > 3) {
        return num + 5;
    }
    else {
        return false;
    }
};
const usuarioNuevo = {
    email: `a@a.com`,
    ID: 45,
    TrialUsado() {
        let usuarioTrial = true;
        if (usuarioTrial === true) {
            return "Trial ya usado";
        }
        else {
            return "Activar Trial";
        }
    },
    obtenerCupon(nombreCupon, valor) {
        return true;
    },
    direccion: "covadonga 987"
};
function hayPropiedad(interfaz) {
    if ("ID" in interfaz) {
        console.log(interfaz.ID);
    }
    else {
        return console.log("ASFD");
    }
}
const otroUsuario = {
    email: `a@a.com`,
    ID: 45,
    TrialUsado() {
        let usuarioTrial = true;
        if (usuarioTrial === true) {
            return "Trial ya usado";
        }
        else {
            return "Activar Trial";
        }
    },
    obtenerCupon(nombreCupon, valor) {
        return true;
    },
    direccion: "covadonga 987",
    Administrador: "ADM",
    mensaje() {
        if (this.Administrador === "ADM") {
            return "Tienes provilegios de ADM";
        }
        else {
            return "voh no teni ni1 wea pnk ql";
        }
    },
};
hayPropiedad(otroUsuario);
console.log("asfasd");
class usuario {
    constructor(email, nombre, fono) {
        this.email = email;
        this.nombre = nombre;
        this.fono = fono;
    }
    get getEmail() { return this.email; }
    ;
    set setEmail(newEmail) { this.email = newEmail; }
    ;
}
class subUsuario extends usuario {
    constructor(email, nombre, fono, codigo) {
        super(email, nombre, fono);
        this.email = email;
        this.nombre = nombre;
        this.fono = fono;
        this.codigo = codigo;
    }
}
const obj1 = new subUsuario(`a@a.com`, `asdf`, 987654, `asdf`);
function perteneceAClase(x) {
    if (x instanceof subUsuario) {
        console.log("ok");
    }
    else {
        console.log("not ok");
    }
}
perteneceAClase(obj1);
;
class usuarioInterfaz {
    constructor(email, ID, TrialUsado, obtenerCupon, codigo, direccion, fono) {
        this.email = email;
        this.ID = ID;
        this.TrialUsado = TrialUsado;
        this.obtenerCupon = obtenerCupon;
        this.codigo = codigo;
        this.direccion = direccion;
        this.fono = fono;
    }
}
function tipoGenerico(valor) { return valor; }
;
const toyota = { modelo: `Yaris`, año: 2015, usado: true };
const chevrolet = { modelo: `Spark`, año: 2017, usado: false };
tipoGenerico(toyota);
const tipoGenerico2 = (valor) => { const algo = 4; return valor[algo]; };
//# sourceMappingURL=index.js.map