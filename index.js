console.log("Bem vindo Ao BytBank \n\n");

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf  = 11122243456;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf  = 990088776612;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001; 
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente = cliente2;
conta2.agencia = 102;



let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log("valor: ", 200);
console.log(conta2);
