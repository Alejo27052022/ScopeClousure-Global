/*
En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.
*/

/*
Input

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();
*/

/*
Output
["michi", "firulais"]
*/

function createPetList(){
    let PetList = [];

    function addPetList(pet_list){
        if(pet_list){
            PetList.push(pet_list);
        }
        return PetList;
    }

    return addPetList;
}

const myPetList = createPetList();

console.log(myPetList("michi"));
console.log(myPetList("firulais"));
console.log(myPetList());

