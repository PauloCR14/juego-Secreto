   //los selectores son utilizados para acceder y manipular
 // elementos dentro del DOM (Document Object Model).

//let parrafo=document.querySelector('p');
//parrafo.innerHTML="Escoje un numero del 1-10";

let numeroSecreto=0;
let numeroIntentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto ){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto; 
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById("valorUsuario").value);
    

    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento("p", "Acertaste el número en " + numeroIntentos + " " + (numeroIntentos == 1 ? "vez" : "veces"));
        document.getElementById("reiniciar").removeAttribute("disabled"); //remueve la etiqueda disabled que esta en la etiqueta
                                                                          //button, el disabled hace que el boton esté deshabilitado

    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }else{
                asignarTextoElemento("p","El numero secreto es mayor");
        }
        numeroIntentos++;
        limpiarCaja();
    }

}

function limpiarCaja(){
    //let valorCaja= document.querySelector("#valorUsuario")
    //valorCaja.value="";

    let valorCaja= document.querySelector("#valorUsuario").value="";
                                         //otra forma de llamar la etiqueta con id
}

function generarNumeroSecreto(){    

    if(listaNumerosSorteados.length  ==numeroMaximo){
        listaNumerosSorteados=[];
        generarNumeroSecreto();
    }else{

    let numeroGenerado= Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.includes(numeroGenerado)){  //el .include checa si el valor ya está en la lista
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    generarNumeroSecreto();
}

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto')
    asignarTextoElemento("p","Indica un numero del 1 al 10")
    numeroSecreto=generarNumeroSecreto()
    numeroIntentos=1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}


condicionesIniciales();


/*El Document Object Model (DOM) es una representación estructurada de un documento HTML o XML en forma de árbol, 
que permite a los lenguajes de programación, como JavaScript, acceder y manipular dinámicamente los elementos de la página web.*/