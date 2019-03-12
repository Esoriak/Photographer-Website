// On document ready
document.addEventListener("DOMContentLoaded", function () {
    // DOM Variables
    const eventSection = document.querySelector("#flux");
    const gallerySection = document.querySelector("#gallery");
    const navQuote = document.querySelector("#quote");

    // Quotes variables
    const landingQuote = "<span>L</span>a création est la naissance de quelque chose. . ."
    const eventQuote = "<span>D</span>epasser le superficiel pour accéder à l'essentiel";
    const galleryQuote = "<span>L</span>es galleries d'images sont overrated"


    // Checks scroll position function when user scroll
    window.onscroll = getScrollPosition;

    function changeQuote(quote) {

        // Change HTML of navbar quote
        navQuote.innerHTML = quote;

        // Fade in nimation on quote change
        navQuote.animate([
            { opacity: 0},
            { opacity: 1}
        ], {
            duration: 1500,
            easing: "ease-in"
        })
        
    }

    function getScrollPosition(e) {

        // Store scroll position
        scrollObject = {
            x: window.pageXOffset,
            y: window.pageYOffset
        }

        //Testing
        console.log(gallerySection.offsetTop);
        
        // // Compares current scroll Y position to the different sections and change the quote accordingly
        if (scrollObject.y < eventSection.offsetTop - 80 && navQuote.innerHTML !== landingQuote) {
            changeQuote(landingQuote);
        } else if (scrollObject.y >= eventSection.offsetTop - 80 && scrollObject.y < gallerySection.offsetTop - 80 && navQuote.innerHTML !== eventQuote) {
            changeQuote(eventQuote);
        } else if (scrollObject.y >= gallerySection.offsetTop - 80 && navQuote.innerHTML !== galleryQuote) {
            changeQuote(galleryQuote);
        }
    }

});

