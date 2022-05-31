function multiplicar(){
 var numero = document.getElementById("numero")
 var resultado = document.getElementById("tabuada")
 if(numero.value.length == 0){
     alert("Digite um numero")
     resultado.innerHTML = `<option>Impossível calcular</option>`
      }else{
          var n = Number(numero.value);
          resultado.innerHTML = '';
          for(let t = 0; t <= 10; t++){
             let imprimir =  t*n;
            resultado.innerHTML += `<option> ${n} x ${t} = ${imprimir}</option>`;
          }
      }

}