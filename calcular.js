// JavaScript Document
var boleto=0, valor=0, Resultado=0, resul=0;
function(calcular){
	
	boleto=parseFloat(document.getElementById("txtCosto")).value;
	valor=parseInt(document.getElementById("txtvalor").value);
	switch(Resultado){
		 case 1:
		 case 2:
		 case 3:
		 resul=(boleto/100*50);
		 break;
		 case 4:
		resul=(boleto/100*25);
		default: alert("esta opcion es incorrecta");
	}
resul=boleto-Resultado;
document.getElementById("txtResul").value=resul;
}