var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, edad) {
        var _this = this;
        this.toString = function () {
            var retorno = "Alumno " + _this.nombre + " " + _this.apellido + " tiene: " + _this.edad + " años";
            return retorno;
        };
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    return Alumno;
}());
var alumno1 = new Alumno("Diego", "Otero", 32);
console.log(alumno1.toString());
