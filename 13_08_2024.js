// Clase Producto
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Clase CarritoDeCompras
class CarritoDeCompras {
    constructor() {
        this.productos = [];
    }

    // Agregar un producto al carrito
    agregarProducto(producto) {
        // Verificar si el producto ya existe en el carrito
        const productoExistente = this.productos.find(p => p.nombre === producto.nombre);
        if (productoExistente) {
            productoExistente.cantidad += producto.cantidad;
        } else {
            this.productos.push(producto);
        }
    }

    // Eliminar un producto del carrito
    eliminarProducto(nombreProducto) {
        this.productos = this.productos.filter(producto => producto.nombre !== nombreProducto);
    }

    // Modificar un producto en el carrito
    modificarProducto(nombreProducto, nuevaCantidad) {
        const producto = this.productos.find(p => p.nombre === nombreProducto);
        if (producto) {
            producto.cantidad = nuevaCantidad;
        }
    }

    // Aplicar un descuento a un producto específico
    aplicarDescuento(nombreProducto, porcentajeDescuento) {
        const producto = this.productos.find(p => p.nombre === nombreProducto);
        if (producto) {
            producto.precio -= producto.precio * (porcentajeDescuento / 100);
        }
    }
    // Generar un resumen de la compra
    generarResumen() {
        let total = 0;
        let resumen = 'Resumen de la compra:\n';
        this.productos.forEach(producto => {
            const subtotal = producto.precio * producto.cantidad;
            resumen += `Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio Unitario: $${producto.precio.toFixed(2)}, Subtotal: $${subtotal.toFixed(2)}\n`;
            total += subtotal;
        });
        resumen += `\ntotal: $${total.toFixed(2)}`;
        return resumen;
    }
}

// Ejemplo de uso
const carrito = new CarritoDeCompras();
const producto1 = new Producto('Manzana', 0.5, 10);
const producto2 = new Producto('Naranja', 0.75, 5);

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.aplicarDescuento('Manzana', 10); // Aplica un descuento del 10% a las manzanas
carrito.modificarProducto('Naranja', 8); // Cambia la cantidad de naranjas a 8
console.log(carrito.generarResumen());

carrito.eliminarProducto('Manzana'); // Elimina las manzanas del carrito
console.log(carrito.generarResumen());