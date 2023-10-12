//_____________________TIPOS__________________

let mensaje:string = "hola Mundo";
let numero:number = 42;
let booleano:boolean = true;
let arrayString: string[] =[`parte de objeto 1`, `parte 2`,`parte 3`];
let arrayNumero: (string | number)[][] =[[1,2],[2,6],[3,6],[4,6],[`5,6`]];
//Arrays en Arrays puede ser tipado con 2 [] consecutivos.
//Para que considere opciones como | o &, deben estar todas las opciones entre ()
//Se pueden usar condicionales para convertir a cadenas o numeros los elementos, como toString() o number().
let arrayVacio: boolean[]=[];

let numero2: Array<number>=[];//metodo TS de Arreglo/Array. Es lo mismo que number[]=[]
//Dar preferencia a este metodo, da menos errores, mejor posibilidad de correccion, y mas opciones.
arrayNumero.map(x => x.toLocaleString);
//TS, al reconocer objeto y tipo, automaticamente solo sugiere los metodos disponibles al tipo.
console.log(mensaje);

//_____________________TUPLAS E ENUMS__________________


let tupla:[number,string[],number] = [1,[`stringX`,`stringY`],2];
//tuplas permiten guardar datos siempre y cuando esten definidos en el tipo.
//permite no solo la definicion del tipo, sino que tb su orden.
//atento con metodos de cadena como push que modifica el orden de la cadena.
//TS no corrige estos metodos de cadena.

const enum Talla {Chica =`s`,Mediana=`m`,Grande=`l`,ExtraGrande=`xl`}
//enum funciona con PascalCase(convencionalmente). Cada palabra parte con mayus, incluso primera.
//si no se asigna valor, parte de 0 con 1er elemento.
//Si se asigna valor numerico distinto, los sgts son consecutivos.
//Si se asigna String, hay que asignarle el valor manualmente al resto del enum.
//Al transpilarlo, va a usar el "metodo" IFEE.
//Dejarlo como contante para que genere menos codigo al transpilar!!
const queTalla = Talla.Mediana
console.log(queTalla);


const enum LoadingState {Idle,Loading,Success,Error}
//si lo ponemos como const, en JS no se van a generar los valores de los enum.
//constantes se van a definir a medida que se vayan definiendo o asignando a otra variable.
const state = LoadingState.Success;

//_____________________UNION TYPES__________________

type Direccion = {
    numero: number,
    calle: string,
    presente: boolean
}
type TipoObjeto = {//en {} despues de : van a ir los tipos que tienen los elementos del objeto
    readonly id:number,//con readonly no podemos modificar el valor del elemento despues.
    nombre?:string,// el ? hace considerar "opcional" el elemento. No dara error en su ausencia.
    talla: Talla,
    direccion: Direccion
}
const objeto: TipoObjeto | Direccion = {//se inserta conjunto de tipo x nombre.
    id: 1,
    nombre:``,
    talla:Talla.Grande,
    direccion: {
        numero:1,
        calle:`Alameda`,
        presente:false
    }
}
//la otra opcion es dejar el elemento con valor vacio.
//Se pueden usar los Enums como tipo.
//objeto.id = 42 //da error xke elemento es readonly.

const arregloArrayX: TipoObjeto[] = []
//Array sin valores, pero esta definido que tipo de valores puede contener. Incluso tipo "objeto".

//_____________________FUNCIONES__________________

function sumaleDos(num:number): number{//{}tb puede tener tipo. Asi aseguras el tipo del return.
    return num+2// En este caso, es imposible que return "string aqui" pase a transpilar.
}
const sumaleTres = (num:number):boolean | number=>{//en f(x)=>, tipo de return va antes de flecha.
    if(num>3){
        return num+5
    }else{return false}
}

//_____________________INTERFAZ__________________

interface Usuario {
    readonly email: string,
    ID: number,
    fono?: number
    TrialUsado(): string,
    //TrialUsado: ()=> string,
    obtenerCupon(nombreCupon:string,valor:number):boolean
}
interface Usuario {
    direccion:string
}
const usuarioNuevo: Usuario = {
    email:`a@a.com`,
    ID:45,
    TrialUsado() {
        let usuarioTrial = true;
        if(usuarioTrial===true){
            return "Trial ya usado"
        }else{return "Activar Trial"}
    },
    obtenerCupon(nombreCupon: "cuponBienvenida", valor: 20) {
        return true
    },
    direccion: "covadonga 987"
}
// Da libertad para  poner funciones y argumentos, no taaaaan estricto.
// Ayuda con autcompletado solo de opciones disponibles.
// Si la interfaz la saque desde otro lado, se puede añadir con mismo formato y mismo nombre.
// Con Types, esto ultimo no se puede hacer, tira error.

interface Admin extends Usuario {
    Administrador: "ADM" | "invitado" | "Naiden",
    mensaje(): String
}
function hayPropiedad(interfaz: Usuario | Admin){
    if ("ID" in interfaz){
    console.log(interfaz.ID)
    }else{return console.log("ASFD")}
}
//Para confirmar si un parametro es parte de la interfaz.
//Tb se puede ver con las clases.
const otroUsuario: Admin = {
    email:`a@a.com`,
    ID:45,
    TrialUsado() {
        let usuarioTrial = true;
        if(usuarioTrial===true){
            return "Trial ya usado"
        }else{return "Activar Trial"}
    },
    obtenerCupon(nombreCupon: "cuponBienvenida", valor: 20) {
        return true
    },
    direccion: "covadonga 987",
    Administrador: "ADM",
    mensaje() {
        if(this.Administrador === "ADM"){
            return "Tienes provilegios de ADM"
        }else{return "voh no teni ni1 wea pnk ql"}
    },
}
hayPropiedad(otroUsuario);
console.log("asfasd");
// con extends creas una NUEVA interfaz que hereda los elementos de otra.

//_______________CLASSES, PUBLIC/PRIVATE, GETTERS/SETTERS__________________

// class usuario {
//     public email:string
//     private nombre:string
//     constructor(email:string,nombre:string){
//         this.email = email;
//         this.nombre = nombre
//     }
// }
abstract class usuario {
    // constructor(public email:string,private nombre:string, protected fono:number){}
    constructor(public email:string,public nombre:string, protected fono:number){}
    get getEmail ():string {return this.email};
    set setEmail(newEmail:string) {this.email= newEmail};
}
//si el nombre:sting, se mantiene private, no me deja usarlo al extender subUsuario.
//Al momento de crear una clase en TS, los elementos del contructor y sus referencias en this
//deben estar mencionadas antes del contructor para que no tire error.
//private en TS es el equivalente a # en JS
//hay una manera mas facil de declarar un contructor, haciendo publico/privado sus componentes.
//MUCHISIMO MAS CORTO Y SE EVITA EL USO DEL THIS!
//Recordar que setters no van con return.
//Abstract, PREVIENE la creacion de objetos de clase. Solo funciona como blueprint
//PRIVATE NO puede ser usado fuera de su origen.
//PROTECTED SOLO puede ser usado en origen y en clase heredada.
//class subUsuario extends usuario {protected codigo: string = ``}
//NO es necesario SUPER. A MENOS que necesitesla exigencia del parametro de subUsuario.

class subUsuario extends usuario {
    protected codigo: string;
    constructor(public email:string,public nombre:string, protected fono:number,codigo:string){
    super (email,nombre,fono);
    this.codigo = codigo}}
const obj1 = new subUsuario(`a@a.com`,`asdf`,987654,`asdf`);
//En caso de necesitarlo, se menciona el nuevo parametro, se agrega nuevamente
//En caso necesario, puedo definir el codigo del metodo en la clase normalemnte.
function perteneceAClase (x: subUsuario | number){
    if(x instanceof subUsuario){
        console.log("ok")
    }else{console.log("not ok")}
}
perteneceAClase(obj1);
//instanceof: verifica si obj de clase pertenece a que clase.
interface IntExt {codigo:number};
class usuarioInterfaz implements Usuario,IntExt{
    constructor(
        public email: string,
        public ID: number,
        // TrialUsado(): string,
        public TrialUsado:()=>string,
        public obtenerCupon: (nombreCupon:string,valor:number)=>boolean,
        public codigo:number,
        public direccion:string,
        public fono?: number){}}
//RECORDAR interfaz usa PascalCase y clases camelCase. Para diferenciar al momento de heredar.
//Parametros opcionales no pueden ir antes de parametros obligatorios.
//Se puede implementar mas de una interzaf al mismo tiempo, pero debe tener mismos parametros.
//En Swift, interfaces se llaman paramnetros.
//Obliga un numero y tipo de parametros, pero NO especifica como se implementa.


//_____________________GENERICS__________________

function tipoGenerico<Type>(valor:Type):Type{return valor};
//A diferencia de any, donde el valor puede ser de un tipo y la respuesta de otro...
//Generico acepta un valor y permite el retorno de un valor del mismo tipo.
//"Type" puede ser remplazado tipicamente por "T".
interface TipoGenerico{modelo:string,año:number,usado:boolean}
const toyota: TipoGenerico = {modelo:`Yaris`,año:2015,usado:true};
const chevrolet: TipoGenerico = {modelo:`Spark`,año:2017,usado:false};
tipoGenerico<TipoGenerico>(toyota);
//Al ser generico, puede ser tb un Type definido por nosotros.
const tipoGenerico2 = <T,>(valor:Array<T>): T =>{const algo = 4; return valor[algo]};
//f(x) Flecha.
//Atento a coma en <>. Se usa como sintaxis comun para confirmar que es especificamente un generico.
