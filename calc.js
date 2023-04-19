const botonNumeros = document.getElementsByName('data-number'); /**Con esto capturo los datos y porque estan en const porque son botones que no van a variar su data o informacion*/
const botonOpera = document.getElementsByName('data-opera'); /**Con esto capturo los datos y porque estan en const porque son botones que no van a variar su data o informacion*/
const botonIgual = document.getElementsByName('data-igual')[0]
const botonDelete = document.getElementsByName('data-delete')[0]
var result = document.getElementById('result');
var opeActual = '';
var opeAnterio ='';
var operacion = undefined;

botonNumeros.forEach(function (boton) { /**evento de click para capturar los eventos  */
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);  /** Todos estos son metodos */
    });
});

botonOpera.forEach(function(boton){    /**evento de click para capturar los eventos  */
    boton.addEventListener('click', function(){
        selectOperation(boton.innerText) /** Todos estos son metodos */
    })
});

botonIgual.addEventListener('click', function(){ /**evento de click para capturar los eventos  */
    calcular(); /** Todos estos son metodos */
    actualizarDisplay(); /** Todos estos son metodos */
});

botonDelete.addEventListener('click', function(){ /**evento de click para capturar los eventos  */
    clear();
    actualizarDisplay(); /** Todos estos son metodos */
});

function selectOperation(op){
    if(opeActual==='') return;
    if(opeAnterio !==''){
        calcular()
    }
    operacion = op.toString();
    opeAnterio = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterio);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior)||isNaN(actual)) return;
        switch(operacion){
            case '+':
                calculo = anterior + actual;
                break;
            case '-':
                calculo = anterior - actual;
                break;            
            case 'x':
                calculo = anterior * actual;
                break;
            case '/':
                calculo = anterior / actual;
                break;         
        }
        opeActual= calculo;
        operacion= undefined;
        opeAnterio= '';
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual ='';
    opeAnterio = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();