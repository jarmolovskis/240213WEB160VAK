document.write('Kažkoks tekstas!');

let paragrafas = document.createElement('p');

paragrafas.innerText = 'Mano pirmasis paragrafo tekstas parašytas per JS.'

console.log(paragrafas);
console.log(paragrafas.innerText);

document.body.append(paragrafas);

console.log(document.images);

let elementasPagalId = document.getElementById('svarbus-paragrafas');
console.log(elementasPagalId);

let elementaiPagalKlase = document.getElementsByClassName('paragrafas');
console.log(elementaiPagalKlase);

let elementaiPagalPavadinima = document.getElementsByTagName('p');
console.log(elementaiPagalPavadinima);

// Pasirinkti elementus pagal CSS selektoriaus uzklausą. Gaunam NodeList (masyvas).
let visiElementaiPagalCSSUzklausa = document.querySelectorAll('p#svarbus-paragrafas.paragrafas');
console.log(visiElementaiPagalCSSUzklausa);

// Pasirinkti pirmą elementą pagal CSS selektoriaus uzklausą. Gaunam patį pirmą elementą.
let elementasPagalCSSUzklausa = document.querySelector('div img');
console.log(elementasPagalCSSUzklausa);


let divas = document.querySelector('div');
console.log(divas);

let paveikslelis = document.createElement('img');
paveikslelis.setAttribute('src', 'https://picsum.photos/301/300');
paveikslelis.setAttribute('alt', 'random image');

console.log(paveikslelis);

divas.prepend(paveikslelis);


let randomColor = Math.floor(Math.random()*16777215).toString(16);

let antraste = document.querySelector('h1');
antraste.style.color = '#' + randomColor;


// console.log(antraste.style.color);

// antraste.classList.add('red');

