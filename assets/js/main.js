import OrdenCompra from "./ordenCompra.js";
import DetalleOrden from "./detalleOrden.js";
import Producto from "./producto.js";

let producto1 = new Producto("1", "Café", 5000);
let producto2 = new Producto("2", "Detergente en polvo", 7000);
let producto3= new Producto("3", "Galletas", 1000);
let producto4 = new Producto("4", "Arroz", 2500);

let detalleProducto1 = new DetalleOrden("1", producto1, 4);
let detalleProducto2 = new DetalleOrden("2", producto2, 2);
let detalleProducto3 = new DetalleOrden("3", producto3, 6);
let detalleProducto4 = new DetalleOrden("4", producto4, 4);

console.log(detalleProducto1.calcularMontodetalle());
console.log(detalleProducto2.calcularMontodetalle());
console.log(detalleProducto3.calcularMontodetalle());
console.log(detalleProducto4.calcularMontodetalle());

let detalles = [detalleProducto1, detalleProducto2, detalleProducto3, detalleProducto4];
console.log(detalles);

let ordenCompra = new OrdenCompra("1", "13-08-24", "14-08-2024", detalles);
console.log(ordenCompra);

console.log(ordenCompra.calcularTotalOrden());

