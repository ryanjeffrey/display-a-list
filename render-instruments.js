export function renderInstrument(instrument) {
    const instrumentEl = document.createElement('div');
    const nameEl = document.createElement('h4');
    const photoEl = document.createElement('img');
    const familyEl = document.createElement('p');
    const componentsTitleEl = document.createElement('p');
    const componentsEl = document.createElement('ul');

    nameEl.textContent = instrument.name;
    photoEl.src = instrument.photo;
    familyEl.textContent = `Family: ${instrument.family}`;
    componentsTitleEl.textContent = 'Components:';

    for (let component of instrument.components) {
        const componentEl = document.createElement('li');
        componentEl.textContent = component;
        componentsEl.append(componentEl);
    }

    instrumentEl.append(nameEl, photoEl, familyEl, componentsTitleEl, componentsEl);
    instrumentEl.classList.add('instrument-item');
    componentsTitleEl.classList.add('components-title');

    return instrumentEl;
}