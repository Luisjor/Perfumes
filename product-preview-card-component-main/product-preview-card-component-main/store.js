if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready() {
    var AgregarProducto = document.getElementsByClassName("AddToCart")
    for (var i = 0; i < AgregarProducto.length; i++) {
        var button = AgregarProducto[i];
        button.addEventListener("click", function() {
            alert("Producto Agregado al Carrito")
        })
    }
}


