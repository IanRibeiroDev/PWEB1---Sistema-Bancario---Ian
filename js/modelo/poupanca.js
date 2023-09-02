class Poupanca extends Conta {
    constructor(numero ,saldo, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }

    get dataAniversario() {
        return this._dataAniversario;
    }

    set dataAniversario(novaData) {
        this._dataAniversario = novaData;
    }
}