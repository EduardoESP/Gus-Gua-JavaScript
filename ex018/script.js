let numero = document.getElementById("numero");
let imprimir = document.getElementById("numeros");
let res = document.getElementById("res");
var numeros = [];

function isNumero(n){ //validação de entrada dos dados
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l) //validação de entrada do dados
{ if(l.indexOf(Number(n)) != -1){
    return true
}else{
    return false
}

}

function adicionar(){
  if(isNumero(numero.value)&& !inLista(numero.value, numeros)){

    numeros.push(Number(numero.value))
    //Adicionando elemento option ao elemento pai select
    let item = document.createElement('option')
    item.text = `Valor ${numero.value} adcionado.`
    imprimir.appendChild(item)
    res.innerHTML = ''

  }else{
      alert("Valor invalido ou já encontrado na lista")
  }
  numero.value = ''
  numero.focus() //cursor voltar a piscar
}


function finalizar(){
    if (numeros.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tot = numeros.length
        let maior = numeros[0];
        let menor = numeros[0]
        let soma = 0
        let media = 0
        for(let pos in numeros){
            soma += numeros[pos]
            if(numeros[pos] > maior)
            maior = numeros[pos]
            if(numeros[pos]< menor)
            menor = numeros[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A media de todos os valores é ${media}.</p>`
    }
    
}


/*
1ª tentativa
function adicionar(){    
    if(numero.value.length == 0 || numero.value < 1 || numero.value > 100){
        alert("Insira um número válido");
    }else{
       // var numero2 = numero;
      numeros.push(numero.value);     
        imprimir.innerHTML += `<option>Valor ${numeros} adicionado</option>`
       
    }
    
}
*/