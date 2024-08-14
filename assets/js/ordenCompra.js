export default class OrdenCompra {
    //declaración de atributos privados
    #idCompra;
    #fechaEmision;
    #fechaEntrega;
    #detallesOrden;

    constructor(idCompra, fechaEmision, fechaEntrega, detallesOrden = []) {
        this.#idCompra = idCompra;
        this.#fechaEmision = fechaEmision;
        this.#fechaEntrega = fechaEntrega;
        this.#detallesOrden = detallesOrden;
    }
    get idCompra() {
        return this.#idCompra;
    }

    set idCompra(idCompra) {
        this.#idCompra = idCompra;
    }

    get fechaEmision() {
        return this.#fechaEmision;
    }

    set fechaEmision(fechaEmision) {
        this.#fechaEmision = fechaEmision;
    }

    get fechaEntrega() {
        return this.#fechaEntrega;
    }

    set fechaEntrega(fechaEntrega) {
        this.#fechaEntrega = fechaEntrega;
    }

    get detallesOrden() {
        return this.#detallesOrden;
    }

    set detallesOrden(detallesOrden) {
        this.#detallesOrden = detallesOrden;
    }

    agregarDetalle(detallesOrden) {
        this.#detallesOrden.push(detallesOrden);
    }

    calcularTotalOrden() {
        let total = 0;
        this.#detallesOrden.forEach((detalle) => {
            total += detalle.calcularMontodetalle();
        });
        return total;
    }
}