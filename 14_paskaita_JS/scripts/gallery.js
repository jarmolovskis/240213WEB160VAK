let mygtukas = document.getElementById('mygtukas');
let galerija = document.getElementById('gallery');
let galleryImages = document.querySelectorAll('div#gallery img');

let myImages = [
    'my-image-1.jpg',
    'my-image-2.jpg',
    'my-image-3.jpg',
    'my-image-4.jpg',
    'my-image-5.jpg'
];

let paspaudimuSkaicius = 0;

galleryImages.forEach(galleryImageEventListeners);

mygtukas.addEventListener('click', function(event) {

    console.log(event.target);
    event.target.style.color = 'red';
    console.log(`Jūs paspaudėte mygtuką ${++paspaudimuSkaicius} kartus!`);

    let image = document.createElement('img');
    image.setAttribute('src', `https://picsum.photos/id/${randomImageIdGenerator()}/300`);
    image.setAttribute('alt', 'random image');

    galerija.append(image);

    image.addEventListener('click', changeImgSrc);
});

function randomImageIdGenerator() {
    return Math.floor(Math.random() * 1000);
}

function galleryImageEventListeners(galleryImage) {
    galleryImage.addEventListener('click', changeImgSrc);
}

function changeImgSrc(event) {
    event.target.setAttribute('src', `https://picsum.photos/id/${randomImageIdGenerator()}/300`);
}

// function changeImgSrc(event) {

//     let imageIndex = Math.floor(Math.random() * myImages.length);

//     event.target.setAttribute('src', `images/${myImages[imageIndex]}`);
// }