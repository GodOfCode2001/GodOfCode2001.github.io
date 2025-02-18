
let width = window.innerWidth;
let height = window.innerHeight;
document.documentElement.style.setProperty('--bg-width', `${availableWidth}px`);
document.documentElement.style.setProperty('--bg-height', `${availableHeight}px`);
window.addEventListener('resize', () => {
    console.log("New Width: " + window.innerWidth + ", New Height: " + window.innerHeight);
});

