//Domm eventos
document
.getElementById("Formulario-producto")
.addEventListener("submit",function(elemento){
   elemento.preventDefault() //evalua el comportamiento de los elemtos
   //obtener valores de formulario
   const name= document.getElementById("name").value;
   precio = document.getElementById("precio").value;
   año = document.getElementById("año").value;

   //crear nuevo objeto de producto
   const producto = new producto(nombre, precio, año);

   //crear nuevo usuario
   const usuario = new usuario();
   //boton validacion
   if(nombre === " " || precio === " " || año === " "){
      usuario.showMessage("Porfavor insertar el Usuario")
   }

   //Guardar producto
   usuario.AddProducto(producto);
   usuario.showMessage("Prodicto ingresado correctamente");
   usuario.resetForm();
});

document.getElementById("Lista-producto").addEventListener("click", (elemento) =>{
   const usuario = new usuario();
   usuario.deleteProduct(elemento.target);
   elemento.preventDefault();
});

//producto clase
export class prodcto{
    constructor(nombre, precio, año){
      this.nombre = nombre;
      this.precio = precio;
      this.año = año;
    }
}


