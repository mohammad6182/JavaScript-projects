function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById('Height').Value;
    Can_ride = (Height < 52) ? "you are too short" : "you are tall enough";
    document.getElementById('Ride').innerHTML = Can_ride + " to ride";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper", "2020","Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik =new Vehicle("Ford", "Pinot", "1971", "Mustang");
function myFunction() {
    document.getElementById('Keywords_and_Constructors'),innerHTML="Erik drives a "+ Erik.Vehicle_Color+Erik.Vehicle_Model+Erik.Vehicle_Year;
}




// My nested Function, The Minimum age to get ride is 18. The starting year will be 2004 or older//

function Nested_Function() {
    document.getElementById('DOB').innerHTML = Age();
    function Age () {
        var Age = 18;
        function year_birth() { Age = 2004;}
        year_birth();
        return Age;  
    }
}
// Waiting for VIP customer, asking for name , if name is John , he is our VIP//
function User() {
    this.name = "John";
}
var User = new User();