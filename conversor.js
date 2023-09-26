function cmToIn() {
    let resultInch;
    resultInch = cm / 2.54;
    pResult.innerHTML = `${cm} centimetros equivalen a ${resultInch} pulgadas`;
}

function inToCm(inch) {
    let resultCm;
    resultCm = inch * 2.54;
    pResult.innerHTML = `${inch} pulgadas equivalen a ${resultCm} centimetros`;
}


let cm = Number(document.querySelector('#input1').value);
let inch = Number(document.querySelector('#input2').value);
const buttom = document.querySelector('#buttom_calcular');
const pResult = document.querySelector('#pResult');


function print() {
    let concatenado = cm + inch;
    pResult.innerHTML = `este es el resultado ${concatenado}`;
}

// function calcular(params) {
//     console.log("cambio el imput.value");
// }



console.log({
    cm,
    inch,
    buttom,
    pResult
    }
)
// addEventListener.
// addEventListener.
// addEventListener.
// addEventListener.
