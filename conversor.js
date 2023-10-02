function cmInput() {
    var cm = document.querySelector('#input1');
    return cm;
}
function inchInput() {
    var inch = document.querySelector('#input2');
    return inch;
}

function cmToIn() {
    var cm = Number(cmInput().value);
    var resultInch = cm / 2.54;
    return resultInch
}
function inToCm() {
    var inch = Number(inchInput().value);
    var resultCm = inch * 2.54;
    return resultCm
}

function print() {
    const pResult = document.querySelector('#pResult');

    if (cmInput().value) {
        pResult.innerHTML = `${cmInput().value} centimetros equivalen a ${cmToIn()} pulgadas`;
    } else if (inchInput().value) {
        pResult.innerHTML = `${inchInput().value} pulgadas equivalen a ${inToCm()} centimetros`;
    } else {
        alert("ingresa un valor")
    }
}

const buttom = document.querySelector('#buttom_calcular');
buttom.addEventListener('click', print)