const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const cross = document.getElementById("cross");

var num = 0;

function increment(){
    num = parseInt(number.value) + 1;
    number.value = num;
}

function decrement(){
    if(number.value>0)
    {
        num = parseInt(number.value) - 1;
        number.value = num;
    }
    else
    {
        alert("Number cannot be less than 0");
    }
}

function resetZero(){
    number.value = 0;
}