const sr = ScrollReveal({
    distance: '35px',
    duration: 2500,
    reset: true
});
sr.reveal('.main-img', { delay: 250, origin: 'left' });
sr.reveal('.main-text h1', { delay: 310, origin: 'top' });
sr.reveal('.main-text h4', { delay: 410, origin: 'right' });

sr.reveal('.social', { delay: 250, origin: 'bottom' });
sr.reveal('.row', { delay: 510, origin: 'left' });
sr.reveal('.button', { delay: 610, origin: 'top' });
sr.reveal('.center', { delay: 710, origin: 'right' });

sr.reveal('.portfolio', { delay: 810, origin: 'bottom' });