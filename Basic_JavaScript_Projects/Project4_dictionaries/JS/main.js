function my_Dictionary() {
    var Vehicle = {
        Type:"Suv",
        Engine:"AMG",
        Color:"Black",
        Fuel_Type:"Gas"
    };
    delete Vehicle.Fuel_Type;
    document.getElementById('Dictionary').innerHTML=Vehicle.Engine;
}