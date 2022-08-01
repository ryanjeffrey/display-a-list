export function renderMeshellAlbum(album) {
    const albumEl = document.createElement('div');
    const titleEl = document.createElement('p');
    const photoEl = document.createElement('img');
    const yearEl = document.createElement('p');
    const songListTitleEl = document.createElement('p');
    const songListEl = document.createElement('ol');

    photoEl.src = album.photo;
    titleEl.textContent = album.title;
    yearEl.textContent = `Released in: ${album.year}`;
    songListTitleEl.textContent = 'Track Listing:';

    for (let song of album.songs) {
        const songEl = document.createElement('li');
        songEl.textContent = song;
        songListEl.append(songEl);
    }

    albumEl.append(titleEl, photoEl, yearEl, songListTitleEl, songListEl);
    albumEl.classList.add('meshell-item');
    photoEl.classList.add('album-photo');


    return albumEl;
}