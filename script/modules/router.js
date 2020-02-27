export const allSections = document.querySelectorAll('section');

// Adding routes by selecting the buttons and the sections
export const myRouter = routie({
    waves: () => {
        updateUI('choose-waves');
    },
    sun: () => {
        updateUI('choose-sunburning');
    }
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