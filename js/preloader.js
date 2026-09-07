document.addEventListener("DOMContentLoaded", () => {
    // Wait for 1.5 - 2 seconds as requested, then fade out the preloader
    setTimeout(() => {
        const preloader = document.getElementById("global-preloader");
        if (preloader) {
            preloader.classList.add("fade-out");
            // Remove from DOM after fade transition completes (0.5s)
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }
    }, 1750); // 1.75 seconds (between 1.5 and 2)
});
