console.log("Entro al main.js");

//Variables
const formularioU = document.getElementById('formulario');
const listaBarrilesU = document.getElementById('listaBarriles');
let arrayBarriles = [];


//Funciones

const CrearBarril = (barril) => {

    let item = {
        barril: barril,
        estado: false
    }

    arrayBarriles.push(item);
    return item;

}

const GuardarDB = (barril) => {
    localStorage.setItem('entregados', JSON.stringify(arrayBarriles));

}

const LeerDB = () => {
    listaBarrilesU.innerHTML = '';
}
//Eventos

formularioU.addEventListener('submit', (e) => {

    e.preventDefault();
    let barrilU = document.querySelector('#barril').value;

    CrearBarril(barrilU);

    GuardarDB();

    formularioU.reset();


});

document.addEventListener('DOMContentLoaded', LeerDB);
