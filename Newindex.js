var Input = document.getElementById('Input'); 
var Button = document.getElementById('Button'); 

// Selecion del input y button

// Selecion de cajas; 
var WillDo = document.getElementById('will-do');
var Doing = document.getElementById('doing'); 
var finish = document.getElementById('finish'); 
var eliminados = document.getElementById('Eliminados')

function escuchar(){

let Data = Input.value; 
if(Data.trim() === ""){
return console.log('escriba algo')
}
// Si el input esta vacio no devolvera nada; 

let cosa = document.createElement('div'); 
cosa.className= 'Cosa'; 

let Box_Eliminar= document.createElement('div'); 
let Box_p = document.createElement('div'); 
Box_p.className = 'Box_p'; 
Box_Eliminar.className= 'Box_Eliminar'

let p_cosa = document.createElement('p');
p_cosa.textContent = document.getElementById('Input').value; 
Box_p.appendChild(p_cosa); 

let b_eliminar = document.createElement('span'); 
b_eliminar.textContent = 'X'; 
Box_Eliminar.appendChild(b_eliminar); 

// Le decimos que al presionar eliminar elimine toda la lista
b_eliminar.addEventListener('click',() => {
cosa.remove()

let end = document.createElement('div'); 
let cj_one = document.createElement('div'); 
let cj_two = document.createElement('div'); 
cj_one.className = 'cj_one'; 
cj_two.className = 'cj_two'; 
end.className = 'end'; 

let P_end = document.createElement('span'); 
let revertir = document.createElement('span'); 
revertir.textContent = 'X'; 
P_end.textContent = `Se a eliminado ${Data}`; 
cj_one.appendChild(P_end); 
cj_two.appendChild(revertir);

revertir.addEventListener('click', ()=> {
    WillDo.appendChild(cosa); 
    end.remove()
})

end.appendChild(cj_one); 
end.appendChild(cj_two);
eliminados.appendChild(end); 



setTimeout(() => {
eliminados.removeChild(end); 

}, 3000)

})


p_cosa.addEventListener('dblclick', () => {


let b_three = document.createElement('Span'); 
b_three.textContent ='✔'; 
b_three.className = 'asignar'; 

let New_cosa = p_cosa.textContent;

let in_two = document.createElement('input'); 
in_two.type = 'text'; 
in_two.className = 'Editar';
in_two.value = New_cosa; 

// cosa.replaceChild(in_two, p_cosa);


Box_p.appendChild(in_two); 
Box_Eliminar.appendChild(b_three);
b_eliminar.remove(); 
p_cosa.remove(); 

b_three.addEventListener('click', () => {


let datap = in_two.value; 
p_cosa.textContent = datap;
b_three.remove(); 
in_two.remove()

// cosa.replaceChild(p_cosa, in_two);
Box_p.appendChild(p_cosa)
Box_Eliminar.appendChild(b_eliminar);

})

console.log('se puede editar')
})

cosa.appendChild(Box_p);
cosa.appendChild(Box_Eliminar);
WillDo.appendChild(cosa)

// Creamos el tex y lo asignamos a Li y creamos los boteliminars y todos iran dentro de WilDo. 


Input.value = ''
}

Button.addEventListener('click', escuchar); 
Input.addEventListener('keypress', (event) => {
if(event.key === 'Enter') {
    escuchar(); 
}
})

Sortable.create(Doing,{
group: 'Shared', 
Animation: 150,
})
Sortable.create(WillDo, {
group: 'Shared', 
Animation: 150
})

Sortable.create(finish,{
group: 'Shared', 
Animation: 150
})