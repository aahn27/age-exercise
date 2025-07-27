const myText = document.getElementById("ageInput");
const resultt = document.getElementById("result");
let age;

document.getElementById("ageBtn").onclick = function () {

age = myText.value;
age = Number(age);

if (age>=100) {
    resultt.textContent='You are too old!';
}
else if (age >= 18) {
    resultt.textContent='You are old enough to enter the site.';
}
else if (age == 0 ) {
    resultt.textContent='You are too young. You were just born!';
}
else if (age < 0) {
    resultt.textContent='You cannot be less than 0 years old.';
}

else {
    resultt.textContent='You must be 18+ to enter the site';
}
}