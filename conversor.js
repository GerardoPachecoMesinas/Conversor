function cmInput() {
    // var cm = document.querySelector('#input1');
    var cm = $('#input1').val();
    return cm;
}
function inchInput() {
    // var inch = document.querySelector('#input2');
    var inch = $('#input2').val();
    return inch;
}

function cmToIn() {
    var cm = Number(cmInput());
    var resultInch = cm / 2.54;
    return resultInch
}
function inToCm() {
    var inch = Number(inchInput());
    var resultCm = inch * 2.54;
    return resultCm
}

$("#input1").on("input", function () {
    $("#input2").val(cmToIn());
});

$("#input2").on("input", function () {
    $("#input1").val(inToCm());
});

$("#input1").on("click", function () {
    $("#input1").val("");
    $("#input2").val("");
});

$("#input2").on("click", function () {
    $("#input2").val("");
    $("#input1").val("");
});

// function print2() {
//     const pResult = document.querySelector('#pResult');

//     if (cmInput().value) {
//         pResult.innerHTML = `${cmInput().value} centimetros equivalen a ${cmToIn()} pulgadas`;
//     } else if (inchInput().value) {
//         pResult.innerHTML = `${inchInput().value} pulgadas equivalen a ${inToCm()} centimetros`;
//     } else {
//         alert("ingresa un valor")
//     }
// }

// const buttom = document.querySelector('#buttom_calcular');
// buttom.addEventListener('click', print)
