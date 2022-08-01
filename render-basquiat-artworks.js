export function renderBasquiatArtwork(artwork) {
    const artworkEl = document.createElement('div');
    const titleEl = document.createElement('h4');
    const photoEl = document.createElement('img');
    const yearEl = document.createElement('p');
    const mediumEl = document.createElement('p');
    const sizeEl = document.createElement('p');

    titleEl.textContent = `${artwork.title}, ${artwork.year}`;
    photoEl.src = artwork.photo;
    mediumEl.textContent = artwork.medium;
    sizeEl.textContent = artwork.size;

    artworkEl.append(titleEl, photoEl, yearEl, mediumEl, sizeEl);
    artworkEl.classList.add('basquiat-item');
    photoEl.classList.add('artwork-photo');

    return artworkEl;
}