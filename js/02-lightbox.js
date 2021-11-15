import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryItem = createCard(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryItem);

function createCard(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
}).join('');
}

new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionsDelay: 250,
});

lightbox = new SimpleLightbox('.gallery a', ({ SourceAttr }));

console.log(galleryItems);
