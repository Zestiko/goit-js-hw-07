import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
};
console.log(refs.gallery);
const { gallery} = refs;
const galleryItemsRefs = galleryItems.map(({preview, original, description}) => `
    <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}"
        data-source="${original}"
        title="Beautiful Image"
    />
    </a>
 `)
    .join('');
console.log(galleryItemsRefs)
gallery.innerHTML = galleryItemsRefs;
gallery.addEventListener('click', onClickGallary);

function onClickGallary(evt) {
    evt.preventDefault();
    if ("IMG" !== evt.target.nodeName) {
        return
    }

    let gallery = new SimpleLightbox('.gallery a');
   
};