document.addEventListener('DOMContentLoaded', function () {
    const scrollTriggerElements = document.querySelectorAll('.scroll-trigger');

    function checkScroll() {
        scrollTriggerElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});