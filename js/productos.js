//ITEM ES LA CLASE DE TODOS MIS PRODUCTOS
const items = document.getElementsByClassName("item");
const CarritoTienda = document.querySelector(".comprar");
const ventanaContenedor = document.querySelector(".ventanaContenedor");
const cantidadDeProductos= document.getElementsByClassName("contar-productos")


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contadorID = 1;
//FUNCION PARA AGREGAR AL CARRITO UN PRODUCTO Y SUMARLO A LAS CANTIDADES SI ES EL MISMO PRODUCTO
const agregarAlCarrito=(producto)=>{
  const repetirProducto= carrito.some((productoRepetido)=>productoRepetido.id === producto.id)
    if (repetirProducto){
        carrito.map ((losProductos)=>{

            if (losProductos.id === producto.id){
                losProductos.cantidad++;
            } 
    });

    }else{
          carrito.push(producto);
    }
    
contadorDeProductos()
GuardadoEnlocal()
}


// RECORRO LOS ELEMENTOS QUE HAY DENTRO DE MIS PRODUCTOS
Array.from(items).forEach(item => {
  
  const nombre = item.querySelector(".titulo-item").textContent;
  const precio = item.querySelector(".precio-item").textContent;
  const imagen = item.querySelector(".img-productos").src;

const precioNumerico = parseFloat(precio.replace("$", ""));


  if (!isNaN(precioNumerico)) {
//CREE UN OBJETO QUE REPRESENTE A MIS PRODUCTOS Y AGREGE ID Y CANTIDADES
    const producto = {
      id: contadorID,
      nombre: nombre,
      precio: precioNumerico,
      imagen: imagen,
      cantidad: 1,
      
    };
contadorID++;
 //AGREGE UN BOTON PARA AÑADIR AL CARRITO PRODUCTOS
    const botones = document.createElement("button");
    botones.innerText = "Agregar al carrito";
    botones.className = "botones";

    botones.addEventListener("click", () => {
      agregarAlCarrito(producto)
   
});
    

 //AGREGO LOS BOTONES A MIS PRODUCTOS(CLASE ITEM)
 item.appendChild(botones);
    item.setAttribute("data-producto-id", producto.id);
  } else {
    console.log(`El precio "${precio}" no es un número válido.`);
  }
});


//LOCALSTORAGE

const GuardadoEnlocal= () =>{
localStorage.setItem("carrito",JSON.stringify (carrito))
}


JSON.parse(localStorage.getItem("carrito"));