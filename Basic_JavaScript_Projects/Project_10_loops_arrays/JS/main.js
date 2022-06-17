function Call_Loop () {
    var month = "";
    var A = 1;
    while(A<13) {
        month += "<br>"+A;
        A++;
    }
    document.getElementById('Loop').innerHTML=month;
}

var Colors = ["Red", "Blue","Pink", "Yellow"]
var favorit ="";
var T;
function for_Loop() {
    for (T = 0; T<Colors.length; T++) {
        favorit += Colors[T] + "<br>";
    }
    document.getElementById("List_of_Colors").innerHTML=favorit;
}