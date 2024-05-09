// productos //

// carga de base de datos de productos y HTML //

const contenedorDeProductos = document.querySelector("#contenedorProductos");

fetch("./js/bdProductos.json")
    .then((resp) => resp.json())
    .then((datos) => { 
        cargaDeProductos(datos);
});

function cargaDeProductos (listaProductos) {

                    listaProductos.forEach(producto => {        
                    const div = document.createElement("div");                    
                    div.innerHTML = `
                    <div class="tarjetas">
                        <div class="card border-danger col-mb-3">
                               <img src="${producto.img}"class="card-img-top" alt="Imagen 01">
                            <div class="card-body">
                                <h5 class="card-title tituloCard">${producto.titulo}</h5>
                                <h6 class="card-title tituloCard">${producto.linea}</h6>
                                <p class="card-text">$${producto.precio}</p>    
                            </div>                          
                        </div>
                    </div>`;         
                                let buttonComprar = document.createElement("button");
                                buttonComprar.classList="btn btn-success btnComprar";
                                buttonComprar.innerText = "COMPRAR";
                                buttonComprar.addEventListener("click", () => {
                                    toastifyCarrito();
                                    cargarCarrito(producto);
                                });
                                div.append(buttonComprar);
                                contenedorDeProductos.append(div);                    
                });
                
            };             

           
// Carga de array Carrito       

const  carritoCompras = JSON.parse(localStorage.getItem("productosDelCarrito"));
const arrayCarrito = carritoCompras;

const cargarCarrito = (producto ) => {
    const itemEncontrado = arrayCarrito.find(item => item.id ===producto.id);
        if (itemEncontrado) {
            itemEncontrado.cantidad++
        } else {
            arrayCarrito.push({...producto, cantidad: 1});
        }
        localStorage.setItem("productosDelCarrito", JSON.stringify(arrayCarrito));
        console.log(arrayCarrito);
}

// Librerías


function toastifyCarrito () {
    Toastify({
        text: "Agregaste un producto al Carrito",
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
