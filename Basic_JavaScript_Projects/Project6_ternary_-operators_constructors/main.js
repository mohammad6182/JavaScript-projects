function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById('Height').Value;
    Can_ride = (Height < 52) ? "you are too short" : "you are tall enough";
    document.getElementById('Ride').innerHTML = Can_ride + " to ride";
}

function New_and_This() {
    var New, and, This;
    New= document.getElementById('New_and_This').Value;
    
}

function Nested_Function() {
    document.getElementById('DOB').innerHTML = Age();
    function Age () {
        var Age = 18;
        function year_birth() { Age = 2004;}
        year_birth();
        return Age;  
    }
}

function User() {
    this.name = "John";
}
var User = new User();