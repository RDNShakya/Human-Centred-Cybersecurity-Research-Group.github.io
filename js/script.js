document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".theme-card");

    cards.forEach(card => {
        card.addEventListener("click", function (e) {

            // Prevent navigation when clicking inner links
            if (e.target.closest("a")) {
                return;
            }

            const target = this.getAttribute("data-href");
            if (target) {
                window.location.href = target;
            }
        });
    });

});
