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

function array_Function() {
    var array_1 = [];
    array_1[0]= "Chicago";
    array_1[1]="Portland";
    array_1[2]="La";
    array_1[3]="New York";
    document.getElementById('Array').innerHTML= array_1[1]+" is the rainiest city in northwest"+'.';
}


function constant_function() {
    const Vehicle_choice={type:'SUV', Brand:"Mercedes", Color:"Black"};
    Vehicle_choice.Color="White";
    Vehicle_choice.Price="$130K";
    document.getElementById('Constent').innerHTML="The " +
Vehicle_choice.Price + Vehicle_choice.Brand + " is the ultimate Suv";

}

let Laptop = {  //this one is not working.//
    Make: "Dell",
    Model:"Inspiron",
    Year: "2020",
    CPU: "intel core i-7",
    description : function() {
        return "My New Laptop is a " + this.Make+this.Model+this.CPU;
    }
};
document.getElementById('Laptop_Categories').innerHTML=Laptop.description();