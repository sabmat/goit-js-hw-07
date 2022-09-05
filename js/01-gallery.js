import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imageCards = addImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageCards);
galleryContainer.addEventListener("click", onGalleryContainer);

function addImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
       <a class="gallery__link" href="large-image.jpg">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </div>`;
    })
    .join("");
}
  
function onGalleryContainer (evt) {
  evt.preventDefault();
if (!evt.target.classList.contains("gallery__image")) {
  return;
    

}

const modal = basicLightbox.create(
  `<img src="${
    evt.target.closest("img").dataset.source
  }" width="800" height="600">`
  );
console.log(evt.target);
console.log(modal.show());
}
document.addEventListener("keydown", (evt) => {
  const pushEscape = evt.code === "Escape";
  const onModal = document.querySelector(".basicLightbox");
  if (!onModal) {
    return;
  }
  if (pushEscape) {
    onModal.remove();
  }
});