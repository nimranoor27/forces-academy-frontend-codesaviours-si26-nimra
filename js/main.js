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
// ===========================
// CONTACT FORM VALIDATION
// ===========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        document.querySelectorAll(".form-control").forEach(field => {

    field.classList.remove("error", "success");

});

let hasError = false;

if (name === "") {

    document.getElementById("name").classList.add("error");
    hasError = true;

} else {

    document.getElementById("name").classList.add("success");

}

if (email === "") {

    document.getElementById("email").classList.add("error");
    hasError = true;

}

if (subject === "") {

    document.getElementById("subject").classList.add("error");
    hasError = true;

} else {

    document.getElementById("subject").classList.add("success");

}

if (message === "") {

    document.getElementById("message").classList.add("error");
    hasError = true;

} else {

    document.getElementById("message").classList.add("success");

}

if (hasError) {

    alert("Please fill in all fields.");

    return;

}

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailPattern.test(email)) {

    document.getElementById("email").classList.remove("success");

    document.getElementById("email").classList.add("error");

    alert("Please enter a valid email address.");

    return;

} else {

    document.getElementById("email").classList.remove("error");

    document.getElementById("email").classList.add("success");

}

        alert("Message sent successfully!");

        contactForm.reset();

    });

}
// ===========================
// BACK TO TOP BUTTON
// ===========================

const backToTop = document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll",function(){

        if(window.scrollY > 300){

            backToTop.style.display = "block";

        }else{

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click",function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}