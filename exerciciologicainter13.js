
var numeroEscolhidoUsuario=10
let min = 1;
let max = 100;
let numeroEscolhido = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numeroEscolhido);


if (numeroEscolhidoUsuario>numeroEscolhido){
    console.log("numero", numeroEscolhidoUsuario, "está errado!!. Tente de novo dica: menor")
}
else if(numeroEscolhidoUsuario<numeroEscolhido){
    console.log("numero", numeroEscolhidoUsuario, "está errado!!. Tente de novo dica: maior")
}
else if (numeroEscolhidoUsuario==numeroEscolhido){
    console.log("acertou!! o numero era", numeroEscolhido)
}
