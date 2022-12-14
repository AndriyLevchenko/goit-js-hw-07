import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
console.log (createImageGalleryMarcup (galleryItems));

// 1 Створення та рендер розмітки

function createImageGalleryMarcup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
    }).join('');
}

const galleryContainer = document.querySelector('.gallery');
const galleryMarcup = createImageGalleryMarcup (galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryMarcup);

// 2 Делегування та відкриття модального вікна по кліку на елементі галереї. 

galleryContainer.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick (evt) {
    evt.preventDefault();
    const isGalleryEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryEl){
        return
    }

    const resourceUrl = evt.target.dataset.source;
    console.log(resourceUrl);

    const instance = basicLightbox.create(`
    <img src="${resourceUrl}" >`)

    instance.show()

    const visible = instance.visible()
    console.log(visible);
    
}


