import { instruments } from './instruments-data.js';

function renderInstrument(instrument) {
    //         <div class="instrument-item">
    //             <p>Hammond B3 Organ</p>
    //             <img src="assets/b3.jpeg">
    //             <p>Keyboard</p>
    //             <ul>
    //                  <li>keys</li> 
    //                  <li>drawbars</li> 
    //                  <li>pedals</li> 
    //                  <li>tonewheel</li> 
    //                  <li>amplifier</li> 
    //             </ul>
    //         </div>

    const instrumentEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const photoEl = document.createElement('img');
    const familyEl = document.createElement('p');
    const componentsEl = document.createElement('ul');
}