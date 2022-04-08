export  class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
        }
    }

}