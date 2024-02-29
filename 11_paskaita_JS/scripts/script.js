// alert('Veikia!');

// Kintamojo deklaracija
let vartotojoVardas;

vartotojoVardas = 'Kazimiras';

// alert(vartotojoVardas);
console.log(vartotojoVardas);
document.write(vartotojoVardas);
// Kazimiras


vartotojoVardas = 'Petras';

console.log(vartotojoVardas);
// Petras



const svetainesPavadinimas = 'vilniuscodingmokykla.lt';

console.log(svetainesPavadinimas);

// Negalima konstanto kintamajam keisti reikšmės.
// svetainesPavadinimas = 'kaunascodingschool.lt';



// let manoVardas = prompt('Koks yra Jūsų vardas?');

// console.log(manoVardas);



// DUOMENŲ TIPAI

let tekstas = 'Kažkoks tekstas';
let skaicius = -10.5;
let loginis = true; // arba false
let nulas = null;
let nepriskirta;

// type of isveda kintamojo reikšmės tipą.
console.log(typeof tekstas);
// string

// jeigu kintamajame nėra reikšmės tada jo tipas yra undefined
console.log(typeof nepriskirta);



// MASYVAI

let mokiniai = ['Donatas', 'Tomas', 'Dovilė', 'Pavelas', 'Vytautas'];

// Išvedam visą masyvą
console.log(mokiniai);

// Išvedam masyvo elementų skaičių.
console.log(mokiniai.length);
// 5

// Išvedu vieną masyvo reikšmę pagal jos indeksą.
console.log(mokiniai[3]);
// Pavelas

mokiniai.pop();
console.log(mokiniai);

mokiniai.push('Erlandas');
console.log(mokiniai);

mokiniai.shift();
console.log(mokiniai);

mokiniai.unshift('Kazimiras');
console.log(mokiniai);

let dovilesIndeksas = mokiniai.indexOf('Dovilė');
console.log(mokiniai[dovilesIndeksas]);



// FUKCIJOS

// Užkomentavau, nes pastoviai prašo įvesti reikšmes. 

// let skaiciusKuriNoriuPakeltiLaipsniu = prompt('Įveskite skaičių kurį norite pakelti laipsniu:');
// let laipsnioSkaicius = prompt('Įveskite laipsnio skaičių:');
// let svarai = prompt('Įveskite svarus kuriuos norite konvertuoti į kilogramus:');
// let manoVardas = prompt('Įveskite savo vardą:');


// function pakeltiLaipsniu(skaicius, laipsnis) {
//     return Math.pow(skaicius, laipsnis);
// }

// function poundsToKilos(pounds) {
//     return pounds / 2.2046;
// }

// function pasisveikinimas(vardas) {
//     console.log('Sveiki ' + vardas + '! Kaip Jums šiandien sekasi?');
// }
// // Sveiki Kazimirai! Kaip Jums šiandien sekasi?


// let rezultatas = pakeltiLaipsniu(skaiciusKuriNoriuPakeltiLaipsniu, laipsnioSkaicius);
// console.log(rezultatas);

// let kilos = poundsToKilos(svarai);
// console.log(kilos);

// pasisveikinimas(manoVardas);


// OBJEKTAI

let mokinys = {
    firstName: 'Kazimiras',
    lastName: 'Jarmolovskis',
    grades: [],
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    evaluate: function(grade) {
        this.grades.push(grade);
    },
    averageGrade: function() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }
}

console.log(mokinys.fullName());

mokinys.evaluate(7);
mokinys.evaluate(4);
mokinys.evaluate(8);
mokinys.evaluate(10);

console.log(mokinys.averageGrade());
