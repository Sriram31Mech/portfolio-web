document.addEventListener("DOMContentLoaded", () => {
    // Loading Animation
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);

    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Scroll Animations
    const scrollElements = document.querySelectorAll(".scroll-animation");
    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= window.innerHeight * 0.75;
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Trigger on load

    // Download CV Animation
    const downloadCvBtn = document.getElementById("download-cv");
    downloadCvBtn.addEventListener("click", () => {
        downloadCvBtn.style.transform = "scale(0.95)";
        setTimeout(() => {
            downloadCvBtn.style.transform = "scale(1)";
        }, 200);
    });
});

// Scroll Left Function
function scrollLeft() {
    const scrollContainer = document.querySelector(".scroll-container");
    scrollContainer.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth",
    });
}

// Scroll Right Function
function scrollRight() {
    const scrollContainer = document.querySelector(".scroll-container");
    scrollContainer.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth",
    });
}