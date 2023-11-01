const input = document.querySelector(".input"); 
const boton = document.querySelector(".boton"); 
const list = document.querySelector(".list"); 
const ini = document.querySelector(".inicio"); 

// selecionamos los elementos 

boton.addEventListener("click", (a) => {

a.preventDefault(); 

const text = input.value; 

const li = document.createElement("li"); 
li.classList.add("list-hijo"); 
const p = document.createElement('p'); 
p.textContent = text; 


li.appendChild(p)
li.appendChild(butondelete()); 
list.appendChild(li); 


input.value = ""; 

})


// esta function crea un elemento li y p para asi poder alamacenar a p en una lista y mostrar todos los datos 
// tambien permite que cada vez que agreguen una nueva tarea no se cargue la pagina y que el input quede en blanco 
// tambien se usara una function que se explica mas abajo 

function butondelete() {

const btn = document.createElement('button'); 

btn.textContent = "X";
btn.className = "btn-delete"; 

btn.addEventListener('click', (a) => {

const item = a.target.parentElement;
list.removeChild(item); 


}); 

return btn; 

}

// Esta funcion crear un boto que elimina todas las listas si estas ya estan completadas