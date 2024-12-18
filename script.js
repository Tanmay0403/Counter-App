const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const cross = document.getElementById("cross");

var num = 0;

function addition(){
    num = parseInt(number.value) + 1;
    number.value = num;
}

function subtraction(){
    if(number.value>0)
    {
        num = parseInt(number.value) - 1;
        number.value = num;
    }
}

function resetZero(){
    number.value = 0;
}