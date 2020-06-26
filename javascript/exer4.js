function validacao(){
    var mens=" ";
    if(document.getElementById("num1").validity.rangeOverFlow) {
       mens="Numero é maior!";

    }

    else if (document.getElementById("num1").validity.rangeUnderFlow) {
        mens = "Número é menor!";
 
    }

    else{

        mens="numero valido!";

    }
    
    document.getElementById("imprimi").innerHTML=mens;
}