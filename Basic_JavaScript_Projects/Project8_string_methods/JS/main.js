function complete_formula() {
    var step_1 = 'first, clean the chicken and cut it in 3 inches peqces';
    var step_2 = 'then, make some marinate juice wich includes:';
    var step_3 = '1-union 2-lime juice 3-safferon 4-olive oil';
    var step_4 = "leave the mix for 24 haours and then start barbq";
    var full_formula = step_1.concat(step_2,step_3,step_4);
    document.getElementById('concat').innerHTML= full_formula;
}

function some_of_it() {
    var sentene = "Mike had no friends since he wasnt from rich family";
    var part= sentene.slice(12,19);
    document.getElementById("short").innerHTML= part;
}

function string_method() {
    var z=1362;
    document.getElementById(numbers2string).innerHTML=z.numbers2String();
}