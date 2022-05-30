function carregar(){
    var mensagem = document.getElementById("mensagem")
    var imagem = document.getElementById("imagem")
    var data = new Date();
    var hora = data.getHours()
    //var hora = 10
    mensagem.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        imagem.src = 'manha.jpg'
        document.body.style.background = '#07f7ff'
    } else if(hora >= 12 && hora <18){
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#0f0470'
    }else{
        imagem.src = 'noite.jpg'
        document.body.style.background = '#050224'
    }

}