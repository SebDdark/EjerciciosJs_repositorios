//declaraiones de identificadores

// identificador esta commpuesto por variables y estas pueden ser de diferentes tipo:
//NUMERICOS: Reales y Enters
//Texto: Caracteres, Cadenas, Booleanos,: Falso, Verdadero, 0 es Falso y 1 es Verdadero
//No Primitivos:
//Arreglos: Vectores, Matrices
//Estructura de Datos: Listas, Pilas, Colas, Diccionarios, Mapas......

//VAR: Variables locales años 90
//Let: Variables Locales
//Const: Son Constantes no Cambian
//Ejemplo de condicionales simples
//Queremos saber si una persona es mayor de edad



var edad = 18, reserva = true

//  if (edad >= 18) {
//      console.log("Es mayor de Edad");
//  } else {
//      console.log("Es menor de Edad");
    
//  }

// if (edad <= 18 && reserva == true){
//     console.log("Puedes Pasar a la Discoteca Bora Bora");
    
// }

 if (edad >= 18){
     console.log("Puedes ingresar a la Discoteca Bora Bora");
     if(reserva == true){
        console.log("Puedes Pasar a Bora Bora ya que cuentas con una reserva");
    }
     else {
         console.log("No puedes pasar a la discoteca ya que no cuentas con una reservacion");
        
}

 }else {
         console.log("No puedes pasar a la Discoteca ya que no eres mayor de edad");
        
    }