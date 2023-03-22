/*
En este desafío recibirás dos números aleatorios por parámetros.

Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:

La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.
*/

function sumWithClosure(firstNum){
    let num1 = firstNum;

    return function (secondNum){
        let num2 = secondNum;
        let result;

        if(!num2){
            console.log(num1);
        }
        else{
            result = num1 + num2;
            console.log(result);
        }
    }
}

sumWithClosure(90)(10);
