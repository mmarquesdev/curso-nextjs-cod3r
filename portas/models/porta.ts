export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #selecionda: boolean
    #aberta: boolean

    constructor(numero, temPresente = false, portaComPresente = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionda = portaComPresente
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get selecionada() {
        return this.#selecionda
    }

    get aberta() {
        return this.#aberta
    }

    get fechada() {
        return !this.#aberta
    }

    desselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}