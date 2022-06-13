function get_destination() {
    if (new Date().getHours() < 16) {
        document.getElementById('Traveling').innerHTML= "We have a destination for you";
    }
}

function get_passcode() {
    passcode = document.getElementById("passcode").value;
    if (passcode=181) {
        access ="Your passcode is right, enjoy your time at the club!"; 
    }
    else {
        access = "you have entered wrong passcode, you have 1 more chance before we delete your account";

    }
    document.getElementById('what is your passcode?').innerHTML.value;
}

var A=15;
function Deduct_number_1() {
    document.write(25 - A );
}
function Deduct_number_2() {
    document.write(A-1);
}
Deduct_number_1();
Deduct_number_2();


function Add_number_1() {
var B= 14;
document.write(1+B);
}
function Add_number_2() {
document.write(B+3);
}
Add_number_1();
Add_number_2();

