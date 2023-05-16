console.clear()
const process = require("process");
const sumar = require("./sumar");
const  restar  = require("./restar");
const  multiplicar  = require("./multiplicar");
const  dividir  = require("./dividir");


const operaciones = ["+", "-", "*", "/"];

const operacion = process.argv[3];
const valor1 = +process.argv[2];
const valor2 = +process.argv[4];
let  resultado = 0;

if(operaciones.includes(operacion)){


if(operacion === "+"){

  resultado = sumar.sumar(valor1,valor2)

}else if(operacion === "-"){

    resultado = restar.restar(valor1,valor2)

}else if(operacion === "*"){

    resultado = multiplicar.multiplicar(valor1,valor2)

}else if(operacion === "/"){

    resultado = dividir.dividir(valor1,valor2)

}console.log(resultado)

}else {
  console.log("ERROR: la operacion no es valida")
}




