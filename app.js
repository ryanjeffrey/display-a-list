// import functions and grab DOM elements
import { basquiatArtworks } from './basquiat-artworks-data.js';
import { meshellAlbums } from './meshell-albums-data.js';
import { instruments } from './instruments-data.js';
import { chicagoSports } from './chicago-sports-data.js';

import { renderBasquiatArtwork } from './render-basquiat-artworks.js';
import { renderMeshellAlbum } from './render-meshell-albums.js';
import { renderInstrument } from './render-instruments.js';
import { renderChicagoSport } from './render-chicago-sports.js';


const basquiatArtworksSection = document.getElementById('basquiat-section');

for (let artwork of basquiatArtworks) {
    const artworkEl = renderBasquiatArtwork(artwork);
    basquiatArtworksSection.append(artworkEl);
}

const meshellAlbumsSection = document.getElementById('meshell-section');

for (let album of meshellAlbums) {
    const albumEl = renderMeshellAlbum(album);
    meshellAlbumsSection.append(albumEl);
}

const instrumentsSection = document.getElementById('instruments-section');

for (let instrument of instruments) {
    const instrumentEl = renderInstrument(instrument);
    instrumentsSection.append(instrumentEl);
}

const chicagoSportsSection = document.getElementById('sports-section');

for (let sport of chicagoSports) {
    const sportEl = renderChicagoSport(sport);
    chicagoSportsSection.append(sportEl);
}