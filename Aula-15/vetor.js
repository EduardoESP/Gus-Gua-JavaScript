let numeros = [10 ,1 ,5 ,7 ,8 ];
/*
console.log(`Números ${numeros}`);
console.log(`Números em ordem ${numeros.sort()}`);
*/
for(i = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}

let posicao1 = numeros.indexOf(8);
console.log(`O numero 8 está na posição ${posicao1}`)

numeros.push(11);

for(i in numeros){
    console.log(numeros[i]);
}

let posicao = numeros.indexOf(8);
console.log(`O numero 8 está na posição ${posicao}`)
