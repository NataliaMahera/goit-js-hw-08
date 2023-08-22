import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryListContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(markupItems) {
  return markupItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}
galleryListContainer.style.listStyle = 'none';
galleryListContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
