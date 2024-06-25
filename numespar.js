let numpar = parseInt(prompt("escriba un numero para saber si es par o impar"));

let residuo = parseInt(numpar % 2);

//alert(residuo);

if(residuo === 0)
{
    alert("Es un numero par...");
}else {
    alert("Es un numero impar...");
}