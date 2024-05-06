//llamado a la clase tecla
let teclaSonido = document.querySelectorAll(".tecla");

//funcion para reproducir el sonido
function reproducirSonido(idsonido){
    document.querySelector(idsonido).play();
}



for(let i =0 ; i < teclaSonido.length; i++){
    const tecla  = teclaSonido[i];
    const instrumental = tecla.classList[1];
    let SonidoId = `#sonido_${instrumental}`;
    tecla.addEventListener("click", function(){
        reproducirSonido(SonidoId);
    })

    //cuando la tecla se mantiene presionada
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa')
        }
    }     
    //cuando la tecla no esta presionada
    tecla.onkeyup = function(){ 
        tecla.classList.remove('activa')
    }
    
}




