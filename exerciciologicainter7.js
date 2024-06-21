var primeiroNumero = 8
var segundoNumero = 9

var soma = primeiroNumero + segundoNumero
var subtracao = primeiroNumero - segundoNumero
var multiplicacao = primeiroNumero * segundoNumero
var divisao = primeiroNumero / segundoNumero

var operacao = soma

if (operacao==soma)
    {
        console.log("a operação de soma de ", primeiroNumero, "e", segundoNumero, "=", operacao)
    }
else if (operacao == subtracao)
    {
        console.log("a operação de subtração de", primeiroNumero, "e", segundoNumero, "=", operacao)
    }
else if (operacao==multiplicacao)
    {
        console.log("a operação de multiplicação de ", primeiroNumero, "e", segundoNumero, "=", operacao)
    }
else
{
    console.log("a operação de divisão", primeiroNumero, "e", segundoNumero, "=", operacao)
}
