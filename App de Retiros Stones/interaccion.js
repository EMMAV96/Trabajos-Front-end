
const btn = document.getElementById('calcular');
const respuesta = document.getElementById('respuesta');

btn.addEventListener('click', hacerSuma);

function hacerSuma(){
    let n1 = 1000 * (parseInt(document.getElementById('n1').value));
    let n2 = 500 * (parseInt(document.getElementById('n2').value));
    let n3 = 200 * (parseInt(document.getElementById('n3').value));
    let n4 = 100 * (parseInt(document.getElementById('n4').value));
    
    let s=n1+n2+n3+n4;

    respuesta.innerHTML =`El total del retiro es ${s}`;
}