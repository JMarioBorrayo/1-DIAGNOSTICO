
var user = document.getElementById("nc");
var pass = document.getElementById("nip");

var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

function validar(){
    var mensaje = []
    if(user.value !=='admin' || pass.value !=='admin') {
    
        alert("datos incorrectos")
    }else{
        if(user.value ==='admin' && pass.value ==='admin'){
            
            alert("Bienvenido " +user.value);
            location.href="Menup.html";
        } 
    }
    
}


function tabla(){
    var dato = document.getElementById("info").value;
   
    var contador = 0;
    var cadena =1
   var valor=1
    let numero = Number.parseInt(dato);
    if(Number.isNaN== true ){
        alert("Ingrese un numero entero");
    }else{
        for(var i=1; i<=dato;i++){
            cadena += "*"+ i ;
     contador=i;
    let tablaD = document.getElementById("tabla").insertRow(contador);
    let col= tablaD.insertCell(0)
    let col1= tablaD.insertCell(1)
    let col2= tablaD.insertCell(2)
    valor *= i
    col.innerHTML = contador
    col1.innerHTML = cadena ;
  
    col2.innerHTML = valor
}
    }
    
}
