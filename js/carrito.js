// Variables
let unidadesCarrito = 0;
let subtotal = 0;
let totalVentaCarrito = 0;

// Función principal - levanta array del local y carga el carrito

function agregarCarrito () {

  const  carritoCompras = JSON.parse(localStorage.getItem("productosDelCarrito"));
  const contenedorCarrito = document.querySelector("#contenedorCarrito");
  console.log(carritoCompras);
      
    carritoCompras.forEach(itemsCarrito => { 
        
        subtotal = (itemsCarrito.cantidad * itemsCarrito.precio);
        totalVentaCarrito = (totalVentaCarrito + subtotal);
        unidadesCarrito = (unidadesCarrito + itemsCarrito.cantidad);
      
// Información del DOM del carrito    

        const divCarrito = document.createElement("div");
        divCarrito.classList ="infoCarrito"              
        divCarrito.innerHTML = `             
         <img class="imagenCarrito" src="${itemsCarrito.img}" alt="Imagen">
             <div class="tituloCarrito">
                 <small>Producto</small>
                 <p>${itemsCarrito.titulo}</p>
             </div>
             <div class="cantCarrito">
                 <small>Cantidad</small>
                 <p>${itemsCarrito.cantidad}</p>
             </div>
             <div class="precioCarrito">
                 <small>Precio</small>
                 <p>${itemsCarrito.precio}</p>
             </div>
             <div class="cantTotal">
                 <small>Total</small>
                 <p>$${subtotal}</p>
             </div>`
            
             contenedorCarrito.append(divCarrito);     
             
            });
}
// Actualización del DOM del carrito    
agregarCarrito();     
actulizarUnidadesCarrito ();

//Información del Carrito

const botonesCarrito = document.querySelector("#contenedorBotones");

// Botón vaciar el carrito
           
            let buttonVaciar = document.createElement("button");
            buttonVaciar.classList="btn btn-success btnVaciar";            
            buttonVaciar.innerText = "VACIAR CARRITO";
            botonesCarrito.append(buttonVaciar);
            buttonVaciar.addEventListener("click", () => {
                sweetCarrito();            
            });
        
//Total carrito                              

let divTotal = document.createElement("div");
divTotal.classList="totalCarrito";            
divTotal.innerText = "$" + totalVentaCarrito;
botonesCarrito.append(divTotal);

// Función borrar carrito

function borrarCarrito () {
    carritoCompras = [];
    console.log(carritoCompras);
    localStorage.setItem("productosDelCarrito", JSON.stringify(carritoCompras));
}

// Función unidades en carrito

function actulizarUnidadesCarrito () {
  // let miVariable = "Hola, mundo!";
  document.querySelector("#textoCarrito").innerHTML = "Unidades en tu Carrito: " + unidadesCarrito;
}

// Librerías

function sweetCarrito () {
Swal.fire({
    title: "Vaciar Carrito!",
    text: "Esta a punto de vaciar el Carrito, lo confirma?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Acepta vaciarlo?"
  }).then((result) => {
    if (result.isConfirmed) {
        borrarCarrito (),        
      Swal.fire({
        title: "Borrado!",
        text: "Su Carrito ahora está vacío.",
        icon: "success"    
      });
      location.reload();
    };
  });
}

            









 