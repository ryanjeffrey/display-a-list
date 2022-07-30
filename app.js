// import functions and grab DOM elements
import { instruments } from './instruments-data.js';
import { chicagoSports } from './chicago-sports-data.js';
import { renderInstrument } from './render-instruments.js';
import { renderChicagoSport } from './render-chicago-sports.js';

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