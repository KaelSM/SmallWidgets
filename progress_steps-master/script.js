const progress = document.querySelector('.progress');
const prev = document.getElementById('#prev');
const next = document.getElementById('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// event listener for the next button
// to increase the currentActive variable
// and to call the update function
next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});


// event listener for the prev button
// to decrease the currentActive variable
// and to call the update function
prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});

// function to update the progress bar
// and the active class on the circles
// and to disable the prev and next buttons
// when the user is on the first or last step
// of the progress bar

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
