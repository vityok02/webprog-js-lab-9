import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
});

let images = [];

for (let i = 0; i < 9; i++)
{
    let image = {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    }

    images.push(image);
}

const refs = {
    gallery: document.querySelector('.gallery'),
};

function createMarkup(arr) {
    return arr
        .map(
            ({ preview, original, description }) => `
                <li class="gallery-item">
                    <a class="gallery-link" href="${original}">
                        <img class="gallery-image" src="${preview}" alt="${description}" />
                    </a>
                </li>
            `
        )
        .join('');
}

refs.gallery.innerHTML = createMarkup(images);
