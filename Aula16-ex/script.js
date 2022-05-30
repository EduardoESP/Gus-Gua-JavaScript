function contar(){
    var numIni = document.getElementById("inicio");
    var numFim = document.getElementById("fim");
    var numPasso = document.getElementById("passo");   
    var resultado = document.getElementById("resultado")
    //var contado = resultado;
    /*
    if(numeroIni =="" || numeroFim =="" ){
      alert("Insira um valor válido")
    }else if(numeroFim < numeroIni){
        alert('[Erro] Fim Não pode ser maior que inicio')
    }      
    else{
       // if(numeroPasso =="") numeroPasso == 1;

        for(i = numeroIni; i <= numeroFim; i = numeroPasso){
            contado.innerHTML = `Contando${i}`
        }

    }   
*/  
if(numIni.value.length == 0 || numFim.value.length == 0 || numPasso.value.length == 0) {
    alert('[Erro] Faltam dados!')
    resultado.innerHTML = `impossível contar`
}else{

    resultado.innerHTML = 'Contando: <br/>'
    var numeroIni = Number(numIni.value);
    var numeroFim = Number(numFim.value);
    var numeroPasso = Number(numPasso.value);

if(numeroPasso <= 0){
    alert('Passo invalido! Considerando passo 1')
    numeroPasso = 1;
}

    if( numeroIni < numeroFim){
        //crescente
    for(let c = numeroIni; c <= numeroFim; c +=numeroPasso)
    resultado.innerHTML += `${c} \u{1F680}`
    }else{
        //regressiva
        for(let c = numeroIni; c >= numeroFim; c -=numeroPasso)
    resultado.innerHTML += `${c} \u{1F680}`
    }
}
    resultado.innerHTML += `\u{1F315}`

}