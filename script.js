function encriptar(){
passSistema = "cY}P':75'~3f"
msgError = "Error en la constraseña, vuelve a intentarlo";
var mensaje = document.getElementById("msg").value;
var password = document.getElementById("pass").value;
//alert(mensaje+"+"+password)
if(passSistema == password){
 //alert("contraseña correcta");
 document.getElementById("error").innerHTML = "";
 var encryted = btoa(mensaje);
 //alert(encryted);

 document.getElementById("demo1").innerHTML = encryted;


}else{


//alert("arror");
document.getElementById("error").innerHTML = msgError;


}


}







function desencriptar(){

var mensajeCodigo = document.getElementById("msgCodigo").value;
var decrypted = atob(mensajeCodigo)
document.getElementById("demo2").innerHTML = decrypted;


}