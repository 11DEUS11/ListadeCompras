const listaDeCompras = ["Leche", "Pan", "Huevos"]

agregarProducto = (producto) => {
    if (listaDeCompras.includes(producto)) {
        console.log(`El producto "${producto}" ya está en la lista.`);
        return;
    } else {
        listaDeCompras.push(producto)
        console.log(`${producto} agregado a la lista de compras`);
    }
   

}

agregarProducto("Carne");
console.log(listaDeCompras);
agregarProducto("Leche");
console.log(listaDeCompras);

eliminarProducto = (productoAEliminar) => {
    for (let i = 0; i < listaDeCompras.length; i++) {
      if (listaDeCompras[i] === productoAEliminar) {
        listaDeCompras.splice(i, 1);
        console.log(`Producto "${productoAEliminar}" eliminado de la lista.`);
        return; 
      }
    }
    console.log(`El producto "${productoAEliminar}" no se encontró en la lista.`);
  }

eliminarProducto("Pan");
console.log(listaDeCompras);

mostrarLista = () => {
    console.log("Lista de compras:");
    for (let i = 0; i < listaDeCompras.length; i++) {
        console.log(`${i + 1}. ${listaDeCompras[i]}`);
    }
}

mostrarLista();

agregarProducto("Proteina de Vainilla");
eliminarProducto("Leche");
agregarProducto("Yogurt");
mostrarLista();
agregarProducto("Leche de coco");
agregarProducto("Yogurt");
mostrarLista();