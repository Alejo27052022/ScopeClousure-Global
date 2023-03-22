const myGlobal = 0; // Declarando una variable Global

function myFunction(){ //Creando una funcion
    const number = 1;
    console.log(myGlobal); // Mostrando el valor de la variable global

    function parent(){ //Creando una funcion padre de la funcion
        const inner = 2;
        console.log(myGlobal, number); //Mostrando el valor de la variable global como de la misma funcion dentro

        function child(){ //Creando una funcion hija de la funcion padre
            console.log(myGlobal, number, inner); //Mostrando todos los valores
        }

        return child() //Returnando la funcion Hijo
    }

    return parent() //Retornando la funcion padre
}

myFunction(); //Retornando toda la funcion
