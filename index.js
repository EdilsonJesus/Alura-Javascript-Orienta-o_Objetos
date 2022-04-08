console.log("Bem Vindo ao BytBank \n\n\n");

class Cliente {
    nome;
    cpf;   
}



const cliente1 = new Cliente();
cliente1.nome = "Pedro";
cliente1.cpf  = 12345678900;


const cliente2 = new Cliente();
cliente2.nome = "Ana";
cliente2.cpf = 98765432100;


class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
        }
    }

}

const contaCorrentePedro = new ContaCorrente ();
contaCorrentePedro.saldo = 0;
contaCorrentePedro.agencia = 1001;



// TEMOS UMA OPERAÇÃO QUE NÃO ESTÁ PROTEGENDO A REGRA DE NEGOCIO DO BANCO
// console.log(contaCorrentePedro.saldo);
// contaCorrentePedro.saldo = 100;
// console.log(contaCorrentePedro.saldo);
// let valorSacado = 200;
// contaCorrentePedro.saldo -= valorSacado; 

// console.log(contaCorrentePedro.saldo);

// VAMOS USAR A MESMA ESTRUTURA, POREM MODIFICANDO E ACRESCENTANDO UMA VERIFICAÇÃO 
// console.log(contaCorrentePedro.saldo);
// contaCorrentePedro.saldo = 100;
// console.log(contaCorrentePedro.saldo);
// let valorSacado = 200;
// if (contaCorrentePedro.saldo >= valorSacado){
//     contaCorrentePedro.saldo -= valor;
//     };
// Agora vamos costumizar e colocar em uma função    

console.log(contaCorrentePedro.saldo);
contaCorrentePedro.saldo = 100; 
console.log(contaCorrentePedro.saldo); 
contaCorrentePedro.sacar(200);

console.log(contaCorrentePedro.saldo);


console.log(cliente1);
console.log(cliente2);