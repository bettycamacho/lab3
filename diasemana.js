let numero = parseInt(prompt("escriba un numero del 1 a 7 para saber que dia de la semana "));
if(numero === 1)
{
    alert("lunes");
}else if(numero === 2)
{
    alert("martes");
}else if(numero === 3)
{
    alert("miercoles");
}else if(numero === 4)
{
    alert("jueves");
}else if(numero === 5)
{
    alert("viernes");
}else if(numero === 6)
{
    alert("sabado");
}else if(numero === 7)
{
    alert("domingo");
}else if(numero === 0)
{
    alert("no es un dia de la semana");
}else if(numero > 7)
{
    alert("tampoco es un dia de la semana");
}
