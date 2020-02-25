export const allSections = document.querySelectorAll('section');
export const myRouter = routie({
    // 'test1': function() {
    //     windSpeeds.insertAdjacentHTML('beforeend', `<div>blabla</div>`)
    // }
    // ,
    waves: () => {
        updateUI('choose-waves');
    },
    sun: () => {
        updateUI('choose-sunburning');
    }
});

export function updateUI(route) {
    allSections.forEach(section => {
      section.classList.remove('active');
    });
    const activeSection = document.querySelector(`[data-route=${route}]`);
    console.log(activeSection);
    activeSection.classList.add('active');
}

