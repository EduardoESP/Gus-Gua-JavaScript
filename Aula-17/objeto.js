let Pessoa = {
    nome: 'Eduardo', idade: 34, sexo: 'M', peso: 100,
    engordar(p=0){
        console.log("Engordou!");
        this.peso += p;
    }

}
Pessoa.engordar(2);
console.log(`O ${Pessoa.nome} pesa ${Pessoa.peso} Kg`)