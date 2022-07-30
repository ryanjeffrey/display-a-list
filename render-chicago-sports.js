export function renderChicagoSport(sport) {
    const chicagoSportEl = document.createElement('div');
    const teamEl = document.createElement('h4');
    const stadiumEl = document.createElement('p');
    const yearEstablishedEl = document.createElement('p');
    const starPlayerTitleEl = document.createElement('p');
    const starPlayerEl = document.createElement('ul');

    teamEl.textContent = `Chicago ${sport.team}`;
    stadiumEl.textContent = `Stadium: ${sport.stadium}`;
    yearEstablishedEl.textContent = `EST. ${sport.yearEstablished}`;
    starPlayerTitleEl.textContent = `Star Player:`;

    const isObject = (val) => {
        if (val === null) {
            return false;
        }

        return typeof val === 'object';
    };

    const nestedObject = (obj) => {
        for (const key in obj) {
            if (isObject(obj[key])) {
                for (const innerKey in obj[key]) {
                    console.log(`${innerKey} => ${obj[key][innerKey]}`);
                }
            } else {
                const objEl = document.createElement('li');
                objEl.textContent = `${key}: ${obj[key]}`;
                starPlayerEl.append(objEl);
            }
        }
    };
    nestedObject(sport.starPlayer);

    chicagoSportEl.append(teamEl, stadiumEl, yearEstablishedEl, starPlayerTitleEl, starPlayerEl);
    chicagoSportEl.classList.add('sport-item');

    return chicagoSportEl;
}
