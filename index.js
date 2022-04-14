console.log("Bem vindo Ao BytBank \n\n");

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122243456);
const cliente2 = new Cliente("Alice", 990088776612);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
console.log(contaCorrenteRicardo);

console.log(ContaCorrente.numeroConta);