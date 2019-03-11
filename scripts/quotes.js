// On document ready
document.addEventListener("DOMContentLoaded", function () {
    // DOM Variables
    const eventSection = document.querySelector("#flux");
    const gallerySection = document.querySelector("#gallery");
    const navQuote = document.querySelector("#quote");

    // Quotes variables
    const landingQuote = "La création est la naissance de quelque chose..."
    const eventQuote = "Depasser le superficiel pour accéder à l'essentiel";
    const galleryQuote = "Les galleries d'images sont overrated"

    window.onscroll = getScrollPosition;

    function changeQuote(quote) {
        navQuote.textContent = quote;
    }
    
    function getScrollPosition(e) {
        // Do something with scroll position
        scrollObject = {
            x: window.pageXOffset,
            y: window.pageYOffset
        }

        // Check if current scroll position is in Event Section
        if (scrollObject.y < eventSection.offsetTop) {
            changeQuote(landingQuote);
        } else if (scrollObject.y >= gallerySection.offsetTop) {
            changeQuote(galleryQuote);
        } else if(scrollObject.y >= eventSection.offsetTop) {
            changeQuote(eventQuote);
        }
    }

});

