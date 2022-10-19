import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};
const { gallery,bigImage } = refs;
// console.log(galleryItems);
// console.log(refs.gallery);

const galleryItemsRefs = galleryItems.map(({preview, original, description}) => `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}"
        data-source="${original}"
    />
    </a>
    </div> `)
    .join('');
// console.log(galleryItemsRefs)

gallery.innerHTML = galleryItemsRefs;
gallery.addEventListener('click', onClickGallary);



function onClickGallary(evt) {
    evt.preventDefault();
    if ("IMG" !== evt.target.nodeName) {
        return
    }
    console.log(evt.target.dataset.source);
    const bigImage = basicLightbox.create(`
    <img
     src="${evt.target.dataset.source}"
    alt="${evt.target.alt}"
        width="800"
        height="600">
`);
bigImage.show()

function handelEscape(evt) {
    if (evt.key !== 'Escape') {
        return
    }
    bigImage.close();
    window.removeEventListener('keydown', handelEscape);
    window.removeEventListener('mousedown', closeWindowOnClick);
    console.log(evt.key)
};
function closeWindowOnClick(evt) {
    window.removeEventListener('keydown', handelEscape);
    window.removeEventListener('mousedown', closeWindowOnClick);
    console.log(evt.button)
};
window.addEventListener('keydown', handelEscape);
window.addEventListener('mousedown', closeWindowOnClick);
    
};




    