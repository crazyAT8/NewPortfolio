// Get references to the anchor tags and div elements
const anchorOne = document.querySelector('a[href="#One"]');
const anchorTwo = document.querySelector('a[href="#Two"]');
const divOne = document.querySelector('.one');
const divTwo = document.querySelector('.two');
const btns = document.querySelectorAll('.btn');

// Add a click event listener to the anchor tag for "One"
anchorOne.addEventListener('click', () => {
    // Show div with class "one"
    divOne.style.display = 'block';
    // Hide div with class "two"
    divTwo.style.display = 'none';
});

// Add a click event listener to the anchor tag for "Two"
anchorTwo.addEventListener('click', () => {
    // Show div with class "two"
    divTwo.style.display = 'block';
    // Hide div with class "one"
    divOne.style.display = 'none';
});

for (const btn of btns) {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        } else {
            btns.forEach(otherBtn => otherBtn.classList.remove('active'));
            btn.classList.add('active');
        }
    });
}