
const inputOne = document.getElementById('input-one'); 
const buttonOne = document.getElementById('button-one'); 
const cajaOne = document.getElementById('do'); 
const AletLugar = document.querySelector('.Aviso')
 
// Selector de elementos


buttonOne.addEventListener('click', () => {

let guardar = inputOne.value; 
if (guardar.trim() === '') {

return; 
}


const caja = document.createElement('li'); 
caja.className = 'caja-one'; 

const palabra = document.createElement('p'); 
palabra.textContent =  document.getElementById('input-one').value; 

const listo = document.createElement('button'); 
listo.textContent = 'Listo'; 

listo.addEventListener('click', () => {


caja.removeChild(terminado); 
caja.removeChild(listo); 
palabra.textContent = `${guardar} ✔`; 



const hecho = document.createElement('button');
hecho.textContent = 'Quitar'; 
caja.appendChild(hecho); 

hecho.addEventListener('click', () => {

caja.appendChild(listo); 
caja.appendChild(terminado); 
palabra.textContent = guardar;
caja.removeChild(hecho)
} )

}) 


const terminado = document.createElement('button'); 
terminado.textContent = 'Eliminar'; 
terminado.addEventListener('click', () => {
cajaOne.removeChild(caja); 
const alertOne = document.createElement('div'); 
alertOne.textContent = `Se elimino ${guardar}`;
AletLugar.appendChild(alertOne);  
setTimeout(() => {
    AletLugar.removeChild(alertOne)
    
    
    }, 1000)

})

palabra.addEventListener('dblclick', () => {



const aceptar = document.createElement('button'); 
aceptar.textContent = 'confirmar'; 
const cancelar = document.createElement('button'); 
cancelar.textContent = 'cancelar'; 

const  guardado2 = palabra.textContent; 
const newText = document.createElement('input'); 
newText.type = 'text'; 
newText.value = guardado2; 

palabra.textContent =''; 
palabra.appendChild(newText);


aceptar.addEventListener('click', () => {

const nuevotex = newText.value; 
palabra.textContent = nuevotex

listo.addEventListener('click', () => {
palabra.textContent = nuevotex + 'sip'; 
})
    

caja.appendChild(listo); 
caja.appendChild(terminado); 

caja.removeChild(aceptar); 
caja.removeChild(cancelar); 

})

caja.appendChild(aceptar);
caja.appendChild(cancelar); 

caja.removeChild(listo)
caja.removeChild(terminado)

})

caja.appendChild(palabra)
caja.appendChild(listo)
caja.appendChild(terminado); 
cajaOne.appendChild(caja); 
console.log('se hizo'); 
inputOne.value = ''
})

