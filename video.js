// Core video and UI elements
const video = document.querySelector('video');
const playButton = document.querySelector('.playcontrol');
const playRect = document.querySelector('.playrect');
const vidContainer = document.querySelector('.container2');
const allSliders = document.querySelectorAll('.slider'); // rename variable
// Select all sliders

// --- Play/Pause toggle ---
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// --- Function to toggle "playing" class on sliders ---


const toggleSliderClasses = () => {
    allSliders.forEach(slider => {
        const fill = slider.querySelector('.slider-fill');
        const thumb = slider.querySelector('.slider-thumb');
        fill.classList.toggle('playing');
        thumb.classList.toggle('playing');
    });
};


// --- Video event listeners ---
video.addEventListener('play', () => {
    playRect.classList.toggle('playing');
    playButton.classList.toggle('playing');
    video.classList.toggle('playing');
    vidContainer.classList.toggle('playing');
    toggleSliderClasses();
});

video.addEventListener('pause', () => {
    playRect.classList.toggle('playing');
    playButton.classList.toggle('playing');
    video.classList.toggle('playing');
    vidContainer.classList.toggle('playing');
    toggleSliderClasses();
});
