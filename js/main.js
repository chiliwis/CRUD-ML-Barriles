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
    LeerDB();

}

const LeerDB = () => {
    listaBarrilesU.innerHTML = '';

    arrayBarriles = JSON.parse(localStorage.getItem('entregados'));
    if (arrayBarriles === null) {
        arrayBarriles = [];
    } else {
        arrayBarriles.forEach(element => {
            listaBarrilesU.innerHTML += `<div class="alert alert-primary mt-4" role="alert"><span class="material-icons float-left mr-2">sports_bar</span><b>${element.barril}</b> - ${element.estado}<span class="float-right"><span class="material-icons">add_circle</span><span class="material-icons">edit</span><span class="material-icons">delete</span></span>/div>`
        });
    }
}

const eliminarDB = (barril) => {
 
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

listaBarrilesU.addEventListener('click', (e) => {
    e.preventDefault();

    

   

    if (e.target.innerHTML === 'add_circle'||e.target.innerHTML === 'edit'||e.target.innerHTML === 'delete' ) {

        let texto = e.path[2].childNodes[1].innerHTML;
      if (e.target.innerHTML === 'add_circle') {
        
      } 
      if (e.target.innerHTML === 'edit') {
        
      }
      if (e.target.innerHTML === 'delete') {
        eliminarDB(texto);
      }
    }
});