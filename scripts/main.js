var frutas= ["Manzana", "Pera","Durazno"];

/* Cuenta los elementos de un arreglo */

 console.log(frutas.length);
 
 /*Si no se hciiera con la propiedad Length */
 
 /*console.log (frutas[0]);
 console.log (frutas[1]);
 console.log (frutas[2]);
*/

 /* for (var i=0; i<frutas.length;i++){
      console.log (frutas[i])
  }*/

/* agregar un elemento */

  frutas.push("Banano");
  mostrar_frutas(); /*llamo la funcion creada abajo mostrar_frutas*/
 
   function mostrar_frutas(){
      for(var i=0;i<frutas.length;i++){
          console.log(frutas[i]);
      }

   }

console.log(`SEPARACION`);

  frutas.pop();
  mostrar_frutas();   /* Me quito el ultimo elemento del Arreglo */

  /* elimina el primer elemento*/
console.log("__________________");
console.log("Eliminado: " +frutas.shift());
console.log(frutas);

//Inserta al inicio de un arreglo 

//Contacternar dos arreglos
console.log("---------");
console.log("Concatenar dos elementos");
var amigosEstudio = ["Pepito", "Juan", "Carlos"];
var amigosTrabajo = ["James", "Oscar"];

console.log(amigosEstudio);
console.log(amigosTrabajo);

console.log("Concatenados");

var amigos = amigosEstudio.concat(amigosTrabajo);
console.log(amigos);


//Metodo Join Convierte arreglo en cadena de texto separados por ,

 console.log("________________________");
 console.log("Conversor de Arreglo en cadena de texto");
 console.log(amigos.join());
 console.log(amigos.join("-")); //se indica elemento separador

 //Ordenamiento de un arreglo (Alfanumerico)

amigos.push(45);
amigos.push(30);
console.log("------------");
console.log("Ordenando Arreglo");
console.log(amigos.sort());

//Metodo IndexOf Obtiene en que posicion del arreglo esta el elemento especificar

console.log("Juan esta en la posicion :" +amigos.indexOf("Juan"));

//Si se busca un elemento que no existe retorna -1

if(amigos.indexOf("Nada") == -1){
console.log ("No existe en el arreglo");
}
 

// Metodo Splice, elomina elementos apartir de una posicion dada
// (posicion, cantidad de elementos a eliminar)
console.log("-------");
console.log("Eliminando un elemento apartir de la posicion 4");
//elimina desde Juan un elemento
console.log("Elemento Eliminado: " +amigos.splice(4,1));
console.log(amigos);

//metodo While y Do While
var numero = 0;

while (numero < 5) {
 console.log(numero);
 numero++;
}

//Otros tipos de objetos Date, Object y Array

console.log(typeof frutas);
console.log(typeof frutas [0]);
console.log(typeof amigos[0]);

 /* Metodos para trabajar cadenas de texto */
console.log("-----------------------");
console.log("Trabajando con cadenas de Texto");
var cadena= 
 "dfjdksjkdjskfjsd skfjdsjfdks skfdskjdksjkfdskdsjkfjkdsn dskfdskfksdkv"
 console.log(cadena);
console.log ("Cantidad de caracteres : " +cadena.length);

//Metodo que busca la primera posicion de un caracter o palabra
//dentro de una cadena de texto
console.log("-----------------------");
console.log(cadena.indexOf("i"));
console.log(cadena.indexOf("amet"));

console.log(cadena.lastIndexOf("e")); //Obtiene posicion de atras hacia adelante

//Metodo substring obtiene una cantidad de caracteres definida con posicion inicial
//desde la posicion 6 obtiene 5 elementos
console.log(cadena.substr(6,5));

///////////////////////////////////////////////////////////////////
//Agregando un elemento desde JS

var listas=document.getElementsByTagName('ul');
var lista_mercado=listas[0];

function agregar_elemento(){
var item=document.createElement('li');
var elemento= document.getElementById("elemento").value;
var contenido= document.createTextNode(elemento) ;
console.log(item);
//var contenido=document.createTextNode(`Arroz`);
item.appendChild(contenido);
lista_mercado.appendChild(item);
}

//////////////////////////////////////////////////////////////





