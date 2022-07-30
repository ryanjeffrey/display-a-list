// import functions and grab DOM elements
import { instruments } from './instruments-data.js';
import { renderInstrument } from './render-instruments.js';

const instrumentsSection = document.getElementById('instruments-section');

for (let instrument of instruments) {
    const instrumentEl = renderInstrument(instrument);
    instrumentsSection.append(instrumentEl);
}
