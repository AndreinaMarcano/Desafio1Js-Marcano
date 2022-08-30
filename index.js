
alert("¡Hola Bienvenido a Mi Convertidor de Divisa!. El  Valor del Dólar hoy es 880 clp y el Euro 900 clp")
let maximodivisa=prompt("El máximo que puede cambiar son 50$ ingrese cantidad")
let isInLoop = true

while (isInLoop) {
    if(maximodivisa<=50){
        isInLoop = false
        alert("¡Tenemos esa cantidad disponible presione Si para Continuar!"); 
    }else{ 
        alert("ingresa una cantidad menor o igual a 50$")
        maximodivisa=prompt("El máximo que puede cambiar son 50$ ingrese cantidad")
    }
    
}

function convertir(){
    let valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    let de= document.getElementById("de").value;
    let a=document.getElementById("a").value;
    let dólar=800;
    let euro= 900;
    resultado=0;

    // Peso a dólar
    if(de==1&&a==2)
    {
        resultado=valor/dólar; 
    }
// peso a euro
   else if(de==1&&a==3)
   {
        resultado=valor/euro;
    } 
//    dolar a peso
    else if(de==2&&a==1){
        resultado=valor*dólar;

    }
    // dolar a euro
    else if(de==2&&a==3)
    {
        resultado=valor*(dólar/euro);
    }
    // euro a peso
    else if(de==3&&a==1)
    {
        resultado=valor*euro;
    }

    // euro a dolar
    else if(de==3&&a==2)
    {
        resultado=valor*(euro/dólar);
    }
    // peso a peso
    else{
        resultado=valor;
    }
document.getElementById("resultado").innerHTML= "Resultado: $"+valor.toFixed(1);
}
