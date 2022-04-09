export  class ContaCorrente {
    agencia;
    //#saldo = 0 
    _saldo = 0;

    sacar(valor){
        if(this.saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor<=0){
            return;
        }

        this._saldo += valor;
    }

}