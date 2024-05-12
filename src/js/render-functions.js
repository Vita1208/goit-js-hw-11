
'use strict';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function displayImages(images, gallery) {
    const markup = images.map(image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <div class="full-image">
                    <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
                    <ul class="image-button">
                        <li><p>Likes</p><p>${image.likes}</p></li>
                        <li><p>Views</p><p>${image.views}</p></li>
                        <li><p>Comments</p><p>${image.comments}</p></li>
                        <li><p>Downloads</p><p>${image.downloads}</p></li>
                    </ul>
                </div>
            </a>
        </li>
    `).join('');
    gallery.innerHTML = markup;

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh();
}

export function displayToast(message, type) {
    iziToast[type]({
        message,
        messageColor: 'white',
        position: 'topRight',
        backgroundColor: 'red'

    });
}