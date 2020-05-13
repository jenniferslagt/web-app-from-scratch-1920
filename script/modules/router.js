import {
    locations
}
from './locations.js'

export const allSections = document.querySelectorAll('section');

// Adding routes by selecting the buttons and the sections
export const myRouter = routie({
    details1: () => {
        updateUI('detail1');
    },
    details2: () => {
        updateUI('detail2');
    },
    details3: () => {
        updateUI('detail3');
    },
    details4: () => {
        updateUI('detail4');
    },
    details5: () => {
        updateUI('detail5');
    },
    details5: () => {
        updateUI('detail6');
    },

});

// Making a function which updates the page when a user clicks on a button
export function updateUI(route) {
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.querySelector(`[data-route=${route}]`);
    console.log(activeSection);
    activeSection.classList.add('active');
}


console.log("alalalala", locations)