function multiplication() {
    var simple_Math = 8 * 6;

    document.getElementById('Math').innerHTML = '8 * 6 = ' + simple_Math;

}
function addition() {
    var addition_1 = 6 + 2;
    document.getElementById('Math_1').innerHTML = '6 + 2 = ' + addition_1;
}

function subtraction() {
    var subtraction_1 = 14 - 2;
    document.getElementById('Math_2').innerHTML = '14 - 2 =' + subtraction_1;
}

function dividend() {
    var dividend_1 = 19 - 3;
    document.getElementById('Math_3').innerHTML = '19 - 3 =' + dividend_1;
}


function increment() {
    var increment_1 = 3;
increment_1++;
document.getElementById('Math_4').innerHTML='3++' + increment_1;
}

function mod () {
    var mod_1 = 10%3;
    document.getElementById('Math_5').innerHTML='10 % 3 ='+mod_1;
}

function Ran () {
    return Math.floor(Math.random() * max)+ 1;
}