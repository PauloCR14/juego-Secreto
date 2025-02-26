let listaGenerica=[];
let lenguajesDeProgramacion=[ 'JavaScript', 'C', 'C++', 'Kotlin' , 'Python', 'Java', 'Ruby','GoLang'];

    function mostrarLenguajes(){
        console.log(lenguajesDeProgramacion);
    }

mostrarLenguajes();

function mostrarLenguajesInverso(){
    for(let i=lenguajesDeProgramacion.length -1 ;i>=0; i--){
        console.log(lenguajesDeProgramacion[i]);

    }
    }

function calcularPromedio(){
    let calificaciones=[];
    let numero=0;
    let total=0;
    numero= prompt("Cuantas calificaciones desea ingresar?");

    for(let i=0;i<numero; i++){
        calificaciones[i]= prompt("Ingrese la calificacion:")

        total+=calificaciones
    }

    let promedio=total/numero;
    alert("El promedio de las calificaciones es: "+promedio)
}

function mostrarMenorMayor(){
    let listaNumeros=[];
    let respuesta="";
    let i=0;
    let mayor=0, menor=0;

    do{
        let numero = Number(prompt("Ingrese un número:"));
        listaNumeros.push(numero); // Usar push() en lugar de índices manuales

        respuesta=prompt("Desea ingresar otro numero?:").toLowerCase();

    }while(respuesta=="si");

    mayor=Math.max(...listaNumeros);
    mayor=Math.min(... listaNumeros);
    alert("El numero mayor de la lista es "+mayor +" y el menor es "+menor);
    console.log(listaNumeros[i]);
}

function sumaDeLista() {
    let lista = [];
    let total = 0;  // Se inicializa total en 0

    do {
        let numero = prompt("Ingrese un número:");
        numero = parseFloat(numero);

        if (!isNaN(numero)) { // Verifica que la entrada sea un número válido
            lista.push(numero);
            total += numero;
        } else {
            alert("Ingrese un número válido.");
        }

        var respuesta = prompt("¿Desea ingresar otro número? (si/no):").toLowerCase();
    } while (respuesta === "si");

    return total;
}


function devolverPosicion(n1, n2, n3){
    let lista2 = [4, 2, 6]; // Lista con los números

    let numero1 = prompt("¿Qué número desea buscar?");
    numero1 = Number(numero1); // Convertir a número

    if (lista2.includes(numero1)) { // Verificar si el número está en la lista
        return lista2.indexOf(numero1); // Devolver la posición
    } else {    
        return -1; // Si no está en la lista
    }
}

function sumaDeDosListas(){
    let primeraLista=[], segundalista=[], suma=[];

    let tamanioLista= Number(prompt("Ingrese el tamaño de las listas: "))

    for(let i=0; i<tamanioLista;i++){
        primeraLista[i]= Number(prompt("Ingrese un numero para la primera lista"));
    }

    for(let i=0; i<tamanioLista;i++){
        segundalista[i]= Number(prompt("Ingrese un numero para la segunda lista"));
    }

    alert("La primera lista fue la siguiente: "+ primeraLista)
    alert("La segunda  lista fue la siguiente: "+ segundalista)

    for(let i=0; i<tamanioLista;i++){
        suma[i]= primeraLista[i]+segundalista[i];
    }

    alert("La suma de los numeros de ambas listas, es la siguiente: "+suma)

}

function numerosAlCuadrado(){
    let lis=[], numerosElevados=[]

    let tamanioLista= Number(prompt("Ingrese el tamaño de las listas: "))

    for(let i=0; i<tamanioLista;i++){
        lis[i]= Number(prompt("Ingrese un numero para la lista"));
    }
    alert("Los numeros que ingreso fueron: "+lis)

    for(let i=0; i<tamanioLista;i++){
        numerosElevados[i]= Math.pow(lis[i],2 );
    }

    alert("Los numeros que ingreso al cuadrado: "+ numerosElevados)
}

 