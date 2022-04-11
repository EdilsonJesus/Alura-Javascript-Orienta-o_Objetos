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
conta2.agencia = 102;
conta2.cliente = cliente2;



contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrenteRicardo);