
const galleryContainer = document.querySelector('.slide');
const prev = document.querySelector('.control.icon-prev');
const next = document.querySelector('.control.icon-next');
const btnSwitch = document.querySelector("button");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
});
const imagenes = ['001', '002', '003'];
let currentIndex = 0;

function createGallery() {
    imagenes.forEach((img, index) => {
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = `img/${img}.jpg`;
        image.alt = `img ${index + 1}`;
        li.appendChild(image);
        if (index === 0) {
            li.classList.add('active');
        }
        galleryContainer.appendChild(li);
    });
}

function showImage(index) {
    const galleryItems = document.querySelectorAll('.slide li');
    galleryItems.forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    showImage(currentIndex);
}

next.addEventListener('click', showNextImage);
prev.addEventListener('click', showPrevImage);

createGallery();
showImage(currentIndex);