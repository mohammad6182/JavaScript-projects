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