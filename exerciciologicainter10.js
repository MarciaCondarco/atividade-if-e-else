var peso=80
var altura=1.69
var imc = peso / (altura*altura)
console.log(imc);

if (imc>=30){
    console.log("obeso")
}
else if (imc>=25){
    console.log("acima do peso")
}
else if (imc >= 18){
    console.log("peso normal")
}
else 
{
    console.log("abaixo do peso")
}

