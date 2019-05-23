var num = document.getElementsByClassName("numbers").value;
var operator = document.getElementsByClassName("operators").value;
//var a , b;
//
//function operation(operator) {
//    if (operator = '+') {
//        return a + b;
//    }
//    else if (operator == '-') {
//        return a - b;
//    }
//    else if ( operator == '/') {
//        retun a / b;
//    }
//    else if (operator == '*') {
//        return a * b;
//    }
//}

function calculate(num) {
    document.getElementById("display").innerHTML = num;
}