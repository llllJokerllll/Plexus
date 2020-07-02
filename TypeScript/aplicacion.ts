class Alumno {
    nombre: String;
    apellido: String;
    edad: number;

    constructor(nombre:String, apellido:String, edad:number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    
    toString = () => {
        var retorno = "Alumno " + this.nombre + " " + this.apellido + " tiene: " + this.edad + " años";
        return retorno;
    }
}

var alumno1 = new Alumno("Diego", "Otero", 32);

console.log(alumno1.toString());