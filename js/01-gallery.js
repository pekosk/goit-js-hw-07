import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryItem = createCard(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryItem);

function createCard(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
  </div>`
}).join('');
}

galleryList.addEventListener('click', zoomImg);

function zoomImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
  return;
  };
  
  const pic = event.target.getAttribute('data-source');

  const instance = basicLightbox.create(`
  <img src="${pic}" width="800" height="600">
`);

  instance.show()
}

console.log(galleryItems);