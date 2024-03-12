let firstName = "Johny";
let lastName = "Scwarzenneger";

if (firstName.length > lastName.length) {
    document.getElementById("atsakymas-01").innerText = lastName;
} else {
    document.getElementById("atsakymas-01").innerText = firstName;   
}