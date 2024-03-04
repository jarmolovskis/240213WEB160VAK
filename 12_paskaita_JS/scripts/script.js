
console.log('Veikia!');


// OBJEKTO KONSTRUKTORIUS

function Mokinys(name, surname) {
    this.firstName = name;
    this.lastName = surname;
    this.grades = [];
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
    this.evaluate = function(grade) {
        this.grades.push(grade);
    };
    this.averageGrade = function() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    };
}

let petras = new Mokinys('Petras', 'Petraitis');
let jonas = new Mokinys('Jonas', 'Jonaitis');

console.log(petras);
console.log(jonas);

petras.evaluate(8);
petras.evaluate(9);

jonas.evaluate(10);
jonas.evaluate(7);
jonas.evaluate(10);

console.log(petras.averageGrade());
console.log(jonas.averageGrade());


let tekstas = 'Kažkoks tekstas';
console.log(tekstas.toLowerCase());
console.log(tekstas.length);
console.log(tekstas.slice(0, 7));
console.log(tekstas.slice(-7));
console.log(tekstas.replace('tekstas', 'sakinys'));


// PRISKIRIMO OPERATORIAI

let skaicius = 10;
skaicius = skaicius + 9;
// 19

skaicius += 9;
// 28

skaicius -= 8;
// 20

skaicius *= 4;
// 80

skaicius /= 8;
// 10

console.log(skaicius);


console.log(5 == 5);
// true
console.log(5 != 5);
// false
console.log(5 === '5');
// false
console.log(5 == '5');
// true
console.log(5 > 5);
// false
console.log(5 < 10);
// true
console.log(5 >= 5);
// true
console.log(5 <= 4);
// false


// && - AND
// || - OR
console.log(5 == 5 && 10 > 5);
// 5 == 5 - true
// 10 > 5 - true
// true
console.log(5 == 5 && 10 < 5 && 10 == 10);
// 5 == 5 - true
// 10 < 5 - false
// 10 == 10 - true
// false
console.log(5 == 5 || 10 > 5);
// 5 == 5 - true
// 10 > 5 - true
// true
console.log(5 == 5 || 10 < 5 || 10 != 10);
// 5 == 5 - true
// 10 < 5 - false
// 10 != 10 - true
// true
console.log(5 == 5 && (10 < 5 || 10 == 10));
// 10 < 5 - false
// 10 == 10 - true
// (10 < 5 || 10 == 10) - true
// 5 == 5 - true
// true

// Neigimo operatorius
console.log(!true);
// false
console.log(!false);
// true
console.log(5 == 5 && !(10 < 5 || 10 == 10));
// false

// Inkrementiniai operatoriai
let x = 10;
console.log(x++);
// 10
console.log(x);
// 11
console.log(++x);
// 12



// SĄLYGOS

// let biudzetas = prompt('Kiek galite skirti pinigų atostogoms?');
// let klimatas = prompt('Koks klimatas jums patinka?');


// let kriptis = '';

// if (biudzetas >= 4000 && klimatas == 'karšta') {
//     kriptis = 'Naujoji Zelandija';
// } else if (biudzetas >= 4000 && klimatas == 'šalta') {
//     kriptis = 'Islandija';
// } else if (biudzetas >= 1000) {
//     kriptis = 'Skandinavijos šalys';
// } else {
//     kriptis = 'Bulgarija arba Serbija';
// }

// console.log('Mes Jums siūlome keliauti į ' + kriptis + '.');


// if (window.innerWidth > 1000) {
//     alert('Jūs naudojatės didelio ekranu!');
// }


// CIKLAI

// FOR ciklas

for (let i = 0; i <= 10; i++) {
    console.log('i = ' + i);
}

for (let j = 100; j >= 90; j--) {
    console.log('j = ' + j);
}


// Generuojam nuolaidų kodus

let nuolaiduKuponai = [];

// Nuolaidų kodų generatoriaus funkcija

function generuotiNuolaiduKupona() {
    return Math.random().toString(36).slice(2, 8).toUpperCase();
}

// Generuojam 100 unikalių nuolaidų kodų ir įdedam juos į masyvą nuolaiduKuponai.

for (let k = 0; k < 50; k++) {

    let kuponoKodas = generuotiNuolaiduKupona();

    // Tikrinam ar nuolaidų kodas jau egzistuoja nuolaiduKuponai masyve. Jei grazina -1 reiskia tokio nuolaidu kupono masyve nėra.
    while (nuolaiduKuponai.indexOf(kuponoKodas) != -1) {

        console.log(kuponoKodas + ' jau egzistuoja.');

        kuponoKodas = generuotiNuolaiduKupona();
    }

    // Idedam nauja unikalų nuolaidų kuponą į masyvą nuolaiduKuponai.
    nuolaiduKuponai.push(kuponoKodas);
}


console.log(nuolaiduKuponai);

// Išvedam 10 paskutinių nuolaidų kuponų.

for (let m = nuolaiduKuponai.length - 1; m >= nuolaiduKuponai.length - 10; m--) {
    console.log(nuolaiduKuponai[m]);
}

// for (let n = 0; n < nuolaiduKuponai.length; n++) {
//     console.log(nuolaiduKuponai[n]);
// }

// Iteruojam per visus masyve esančius nuolaidų kuponus.
nuolaiduKuponai.forEach(function(nuolaidosKuponas) {

    // Galėtų būti logika random userio pasirinkimo ir jam nuolaidų kupono išsiuntimo.

    console.log(nuolaidosKuponas + ' buvo išsiųstas.');
});