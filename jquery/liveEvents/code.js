/*
let buttons = document.querySelectorAll('button');
//regresa un arreglo, forEach
buttons.forEach((button) =>{
    button.addEventListener('click',()=>{
			console.log('Click');
		})
    
});*/


document.addEventListener('click',(ev)=>{
	//event target hace referencia al nodo donde inicialmente se
	// disparo el evento.
	/*console.log(ev.target);*/
	if(ev.target.tagName == 'BUTTON'){
		console.log('Click');
	}
});

//despues de dos segundos se ejecuta la funcion
setTimeout(()=>{
	let button = document.createElement('button');
	button.innerHTML = 'Articulos';
	document.querySelector('body').appendChild(button);
},2000);