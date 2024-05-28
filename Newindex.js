var Input = document.getElementById('Input'); 
var Button = document.getElementById('Button'); 
// Selecion del input y button

// Selecion de cajas; 
var WillDo = document.getElementById('will-do');
var Doing = document.getElementById('doing'); 
var finish = document.getElementById('finish'); 

Button.addEventListener('click', () => {

let Data = Input.value; 
if(Data.trim() === ""){
return console.log('escriba algo')
}
// Si el input esta vacio no devolvera nada; 

let cosa = document.createElement('div'); 
let p_cosa = document.createElement('p');
p_cosa.textContent = document.getElementById('Input').value; 

let b_eliminar = document.createElement('button'); 
b_eliminar.textContent = 'Eliminar'; 
let b_two = document.createElement('button'); 
b_two.textContent = 'Empezar'; 

// Le decimos que al presionar eliminar elimine toda la lista
b_eliminar.addEventListener('click',() => {cosa.remove()})

// cuando le de click a empezar se quitara el boto de empesar y se pondra otro boto llamado 'terminar'
b_two.addEventListener('click',() => {
b_two.remove(); 
let terminar= document.createElement('button'); 
terminar.textContent = 'terminar'
cosa.appendChild(terminar)
Doing.appendChild(cosa);

// cuando se le de a terminar este se eliminara y pongra otro boto llamado reanidar y pasara a Finish
terminar.addEventListener('click',() => {finish.appendChild(cosa);
terminar.remove(); 
let reanudar = document.createElement('button'); 
reanudar.textContent = 'Reanudar'; 
cosa.appendChild(reanudar)

// cuando se le de a reaundar se eliminara y volvera terminar y se pondra en la casa Doing 
reanudar.addEventListener('click', () => {
reanudar.remove(); 
cosa.appendChild(terminar);
Doing.appendChild(cosa)})

})  // <= este es de terminar 

}) // <= este es de b_two


p_cosa.addEventListener('dblclick', () => {


let b_three = document.createElement('button'); 
b_three.textContent ='Asignar'; 

let New_cosa = p_cosa.textContent;

let in_two = document.createElement('input'); 
in_two.type = 'text'; 
in_two.value = New_cosa; 

cosa.replaceChild(in_two, p_cosa);
// cosa.appendChild(b_three);
in_two.insertAdjacentElement('afterend', b_three);

b_eliminar.remove(); 
// b_two.remove(); 

b_three.addEventListener('click', () => {


let datap = in_two.value; 
p_cosa.textContent = datap;
b_three.remove(); 

cosa.replaceChild(p_cosa, in_two);
cosa.appendChild(b_eliminar);

})

console.log('se puede editar')
})


cosa.appendChild(p_cosa);
cosa.appendChild(b_eliminar);
cosa.appendChild(b_two);
WillDo.appendChild(cosa)

// Creamos el tex y lo asignamos a Li y creamos los boteliminars y todos iran dentro de WilDo. 


Input.value = ''
})

