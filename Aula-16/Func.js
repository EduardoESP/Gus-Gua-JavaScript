function parImpar (num){
    if(num % 2 == 0){
        return `${num} é par`
    }else{
        return `${num} é impar`
    }
}

let resultado = parImpar(10);
console.log(resultado)