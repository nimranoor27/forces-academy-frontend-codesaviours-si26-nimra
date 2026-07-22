const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;
        const symbol = counter.dataset.symbol || "+";

        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 100);

            count += increment;

            if (count >= target) {

                count = target;
                counter.innerText = target + symbol;

            } else {

                counter.innerText = count + symbol;
                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
// ===========================
// LIGHTBOX
// ===========================

function openLightbox(imageSrc) {

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = imageSrc;

}

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";

}