var primeiroLado = 40
var segundoLado  = 43
var terceiroLado = 41

if (primeiroLado==segundoLado && primeiroLado==terceiroLado)
   {
    console.log("triangulo equilatero")
   }
else if (primeiroLado==segundoLado || primeiroLado==terceiroLado){
    console.log("triangulo isosceles")
}
else {
    console.log("triandulo escaleno ")
}