import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imageCards = addImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageCards);
galleryContainer.addEventListener("click", onGalleryContainer);



function addImgGallery(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
      </a>`;
      })
      .join("");
  }
    
function onGalleryContainer (evt) {
    evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
      
  
  }
  
 const  gallery = new SimpleLightbox('.gallery a');
  
  gallery.on("show.simplelightbox", function () {
    gallery.defaultOptions.captionDelay = 250;
  })}