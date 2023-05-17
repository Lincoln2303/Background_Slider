// II. We want to make sure, when we click on the arrows it's changes the background-image:
// II.01. We'll need the body object: (NOTE: It's just document.body)
const body = document.body;
// II.02. We'll need the slides: (NOTE: This is going to be a nodelist, similar to an array)
const slides = document.querySelectorAll('.slide');
// II.03. We'll need the buttons: (NOTE: Separately, and using the id)
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById ('right');

// II.04. We're going to set a variable activeSlide, and set it to 0: (NOTE: So we'll know which one we're on)
// EXTRA-NOTE: If we change this to 1, then we'll get back the 2nd background image
let activeSlide = 0;

// II.05. We add a function: (NOTE: Which is going to set the background to the body)
// NOTE: Now we can comment out the background img in css .body
const setBgToBody = () => {
    // II.06. Here we take the body, and add a style with a background image:
    // NOTE: We're passing in slides (like an array), and adding the active class on that
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// II.07. Calling the function: (NOTE: Now we should see, if we get back the background)
setBgToBody();

// II.08. Now we want to be able to set the active class for the next image, so we create for that a function:
const setActiveSlide = () => {
    // II.09. We're looping throuhg our slides here:
    slides.forEach(slide => {
        // NOTE: Here we have to remove the active class from the slide
        slide.classList.remove('active');
    })
    // II.10. After we'll take the slides, pass in the activeSlide, and we want to add the active class:
    slides[activeSlide].classList.add('active');
}

// II.17. We have to call both functions to make it work: (NOTE: Anyway the background will collapse)
setActiveSlide();

// II.11. Now we'll add eventListener for the arrows: (NOTE: So we can increment the activeSlide)
rightBtn.addEventListener('click', () => {
    // NOTE: Here we can just increment the number by one:
    activeSlide++;
    // II.13. We add a boolean: (NOTE: For checking if the activeSlide is bigger then the length then it goes back to 0 again)
    if (activeSlide > slides.length -1  ) {
        activeSlide = 0;
    }
    // II.14. Now we have to call the two function below:
    // NOTE: This will sync the background, and the slide
    setBgToBody();
    setActiveSlide();   
})

// II.12. We'll do the same thing (or opposite), with the left-arrow:
leftBtn.addEventListener('click', () => {
    // NOTE: Here we're decrementing the activeSlide 
    activeSlide--;
    // II.15. Setting up a boolean here too: (NOTE: activeSlide just has to be less than 0 )
    if (activeSlide < 0) {
        activeSlide = slides.length -1; 
    }
    // II.16. And we're calling the function below too:
    setBgToBody();
    setActiveSlide(); 
})



