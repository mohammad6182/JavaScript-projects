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