function Call_Loop () {
    var month = "";
    var A = 1;
    while(A<13) {
        month += "<br>"+A;
        A++;
    }
    document.getElementById('Loop').innerHTML=month;
}